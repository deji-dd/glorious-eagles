/* eslint-disable react/prop-types */
// ConfirmationTemplate.jsx
import React from 'react';

export const ConfirmationTemplate = ({ data, attachments }) => {
	// Filter sensitive fields
	const fieldLabels = {
		firstName: 'First Name',
		lastName: 'Last Name',
		address: 'Address',
		dateOfBirth: 'Date of Birth',
		email: 'Email',
		cellPhone: 'Cell Phone Number',
		homePhone: 'Home Phone Number',
		language: 'Language(s) Spoken',
		maritalStatus: 'Marital Status',
		religiousPreference: 'Religious Preference',
		guardianshipType: 'Guardianship Type',
		gender: 'Gender',
		height: 'Height (CM)',
		weight: 'Weight (KG)',
		hairColor: 'Hair Color',
		eyeColor: 'Eye Color',
		distinguishingMarks: 'Distinguishing Characteristics/Identifying Marks',
		ssn: {
			label: 'Social Security Number (SSN)',
			sensitive: true,
		},
		medicalNumber: {
			label: 'Medical Assistance Number',
			sensitive: true,
		},
		countyResponsibility: 'County of Responsibility',
		PMINumber: 'PMI Number',
		countyFinancialResponsibility: 'County of Financial Responsibility',
		burialAccountNumber: 'Burial Account Number',
		diagnosis: 'Diagnosis',
		allergies: 'Allergies',
		protocols: 'Protocols (seizure, diabetic, etc.)',
		medicalEquipment: 'Medical equipment, devices, or adaptive aides or technology used',
		dietaryNeeds: 'Specialized dietary needs',
		legalRepresentativeName: 'Legal Representative Name',
		legalRepresentativePhone: 'Legal Representative Phone Number',
		legalRepresentativeAddress: 'Legal Representative Address',
		authorizedRepresentativeName: 'Authorized Representative Name',
		authorizedRepresentativePhone: 'Authorized Representative Phone Number',
		authorizedRepresentativeAddress: 'Authorized Representative Address',
		primaryEmergencyName: 'Primary Emergency Contact Name',
		primaryEmergencyPhone: 'Primary Emergency Contact Phone Number',
		primaryEmergencyAddress: 'Primary Emergency Contact Address',
		caseManagerName: 'Case Manager Name',
		caseManagerPhone: 'Case Manager Phone Number',
		caseManagerAddress: 'Case Manager Address',
		familyMemberName: 'Family Member Name',
		familyMemberPhone: 'Family Member Phone Number',
		familyMemberAddress: 'Family Member Address',
		primaryHealthCarProfessionalName: 'Primary Health Care Professional Name',
		primaryHealthCarProfessionalPhone: 'Primary Health Care Professional Phone Number',
		primaryHealthCarProfessionalAddress: 'Primary Health Care Professional Address',
		psychiatristName: 'Psychiatrist Name',
		psychiatristPhone: 'Psychiatrist Phone Number',
		psychiatristAddress: 'Psychiatrist Address',
		otherProfessionalRole: 'Other Health Professional Role',
		otherProfessionalName: 'Other Health Professional Name',
		otherProfessionalPhone: 'Other Health Professional Phone Number',
		otherProfessionalAddress: 'Other Health Professional Address',
		clientInsurance: 'Client Insurance',
		clientPolicy: 'Client Policy Number',
		clientCaseManager: 'Client Case Manager',
		clientPhone: 'Client Phone Number',
		clientCounty: 'Client County of Financial Responsibility',
		clientBurialNumber: 'Client Burial Account Number',
		childEthnicity: 'Child Ethnicity',
		otherPrimaryLanguage: 'Other Primary Language Spoken At Home',
		otherSecondaryLanguage: 'Other Secondary Language Spoken At Home',
		referentName: 'Name of Person Completing Form',
		referentRelationship: 'Referent Relationship to Child',
		referentPhone: 'Referent Phone Number',
		referentEmail: 'Referent Email',
		referentReason: 'Reason for Referral',
		insuranceCard: 'Insurance Card',
		wellChild: 'Well Child Checkup',
		iep: 'IEP Documents',
		diagnosticAssessment: 'Diagnostic Assessments',
		schoolEvaluation: 'School Evaluation From Psychologist',
	};
	const filteredData = Object.entries(data).filter(([key]) => !['ssn', 'medicalNumber'].includes(key));

	const getFieldLabel = (key) => {
		const label = fieldLabels[key];
		return typeof label === 'object' ? label.label : label || key;
	};

	const renderValue = (value) => {
		if (Array.isArray(value)) {
			return (
				<ul style={{ margin: 0, paddingLeft: '20px' }}>
					{value.map((file, index) => (
						<li key={index} style={{ marginBottom: '8px' }}>
							{file.name || file.filename || 'Uploaded File'}
						</li>
					))}
				</ul>
			);
		}
		return <span style={{ color: '#7f8c8d' }}>{value?.toString() || 'Not provided'}</span>;
	};

	const renderAttachments = attachments?.length ? (
		<div style={{ marginTop: '20px' }}>
			<h3 style={{ color: '#2c3e50' }}>Submitted Files</h3>
			<ul style={{ paddingLeft: '20px' }}>
				{attachments.map((att, idx) => {
					// If the attachment is a ZIP, we will show the number of files inside it
					return (
						<li key={att.content_id || idx} style={{ marginBottom: '6px' }}>
							{att.filename}
						</li>
					);
				})}
			</ul>
		</div>
	) : null;

	return (
		<div
			style={{
				fontFamily: 'Arial, sans-serif',
				maxWidth: '600px',
				margin: '0 auto',
				padding: '20px',
			}}
		>
			<h1 style={{ color: '#2c3e50' }}>Application Received</h1>
			<p>Thank you for submitting your application to Glorious Eagles. Here&apos;s a summary:</p>

			<div
				style={{
					backgroundColor: '#f8f9fa',
					borderRadius: '8px',
					padding: '20px',
					marginTop: '20px',
				}}
			>
				{filteredData.map(([key, value]) => (
					<div
						key={key}
						style={{
							marginBottom: '15px',
							borderBottom: '1px solid #eee',
							paddingBottom: '15px',
						}}
					>
						<div
							style={{
								fontWeight: '600',
								color: '#2c3e50',
								marginBottom: '5px',
							}}
						>
							{getFieldLabel(key)}
						</div>
						<div style={{ color: '#7f8c8d' }}>{renderValue(value)}</div>
					</div>
				))}
			</div>
			{renderAttachments}
			<p style={{ marginTop: '25px', color: '#7f8c8d' }}>We&apos;ll review your application and contact you within 5-7 business days.</p>
		</div>
	);
};
