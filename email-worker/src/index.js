import { Resend } from 'resend';
import { ApplicationTemplate } from './emails/ApplicationTemplate';
import { ConfirmationTemplate } from './emails/ConfirmationTemplate';

export default {
	async fetch(request, env) {
		if (request.method !== 'POST') {
			return new Response('Method Not Allowed', {
				status: 405,
			});
		}

		const resend = new Resend(env.RESEND_API_KEY);
		const domain = 'gloriouseagles.com';

		try {
			const body = await request.json();

			if (!body.to || !body.subject || !body.details) {
				throw new Error('Missing required fields');
			}

			const { details, attachments } = body;

			const ownerEmail = await resend.emails.send({
				from: `Glorious Eagles <president@${domain}>`,
				to: `president@${domain}`,
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
				from: `Glorious Eagles <president@${domain}>`,
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
						'Content-Type': 'application/json',
					},
				},
			);
		}
	},
};
