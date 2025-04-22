import { Resend } from 'resend';
import { ApplicationTemplate } from './emails/ApplicationTemplate';
import { ConfirmationTemplate } from './emails/ConfirmationTemplate';

const CORS = {
	'Access-Control-Allow-Origin': '*', // or your specific origin
	'Access-Control-Allow-Methods': 'POST,OPTIONS',
	'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
	async fetch(request, env) {
		if (request.method === 'OPTIONS') {
			return new Response(null, { status: 204, headers: CORS });
		}

		if (request.method !== 'POST') {
			return new Response('Method Not Allowed', {
				status: 405,
				headers: CORS,
			});
		}

		let body;

		try {
			body = await request.json();
		} catch {
			return new Response(JSON.stringify({ success: false, error: 'Invalid JSON' }), {
				status: 400,
				headers: { ...CORS, 'Content-Type': 'application/json' },
			});
		}

		const { details, attachments } = body;

		try {
			const resend = new Resend(env.RESEND_API_KEY);
			const domain = 'gloriouseagles.com';

			const ownerEmail = await resend.emails.send({
				from: `Glorious Eagles <info@${domain}>`,
				to: `info@${domain}`,
				subject: body.subject,
				reply_to: body.to,
				react: <ApplicationTemplate data={details} attachments={attachments} />,
				attachments,
			});

			if (ownerEmail.error) {
				throw new Error('Failed to send owner notification');
			}

			details._attachments = attachments;

			// Send confirmation
			const confirmationEmail = await resend.emails.send({
				from: `Glorious Eagles <info@${domain}>`,
				to: body.to,
				subject: 'Application Confirmation',
				react: <ConfirmationTemplate data={details} attachments={attachments} />,
				attachments,
			});

			return new Response(
				JSON.stringify({
					success: true,
					ownerId: ownerEmail.data?.id,
					confirmationId: confirmationEmail.data?.id,
					warning: confirmationEmail.error ? 'Confirmation may not have been delivered' : null,
				}),
				{
					status: 200,
					headers: {
						...CORS,
						'Content-Type': 'application/json',
					},
				},
			);
		} catch (error) {
			return new Response(
				JSON.stringify({
					success: false,
					error: error.message || 'Processing failed',
				}),
				{
					status: 400,
					headers: {
						...CORS,
						'Content-Type': 'application/json',
					},
				},
			);
		}
	},
};
