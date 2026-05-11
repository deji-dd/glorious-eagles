/**
 * Check if running in development mode
 */
export const isDevMode = () => {
  return import.meta.env.VITE_DEV_MODE === "true";
};

/**
 * Get the dev email for testing
 */
export const getDevEmail = () => {
  return import.meta.env.VITE_DEV_EMAIL || "test@example.com";
};

/**
 * Generate test form data for dev mode
 */
export const generateTestFormData = () => {
  return {
    firstName: "Test",
    lastName: "User",
    address: "123 Test Street, Test City, TS 12345",
    dateOfBirth: "1990-01-15",
    email: getDevEmail(),
    cellPhone: "+16124566090",
    homePhone: "+16124566091",
    language: "English",
    gender: "Prefer not to say",
    height: "170",
    weight: "75",
    hairColor: "Brown",
    eyeColor: "Blue",
    guardianshipType: "Self",
    ssn: "123-45-6789",
    medicalNumber: "MA123456",
    countyResponsibility: "Hennepin",
    PMINumber: "PMI123",
    countyFinancialResponsibility: "Hennepin",
    burialAccountNumber: "BA123",
    diagnosis: "Test Diagnosis",
    allergies: "None",
    protocols: "None",
    medicalEquipment: "None",
    dietaryNeeds: "None",
    legalRepresentativeName: "John Doe",
    legalRepresentativePhone: "+16124566090",
    legalRepresentativeAddress: "123 Legal St",
    authorizedRepresentativeName: "Jane Doe",
    authorizedRepresentativePhone: "+16124566091",
    authorizedRepresentativeAddress: "124 Auth St",
    primaryEmergencyName: "Emergency Contact",
    primaryEmergencyPhone: "+16124566092",
    primaryEmergencyAddress: "125 Emergency St",
    caseManagerName: "Case Manager",
    caseManagerPhone: "+16124566093",
    caseManagerAddress: "126 Case St",
    familyMemberName: "Family Member",
    familyMemberPhone: "+16124566094",
    familyMemberAddress: "127 Family St",
    primaryProfessionalName: "Dr. Test",
    primaryProfessionalPhone: "+16124566095",
    primaryProfessionalAddress: "128 Professional St",
    psychiatristName: "Dr. Psychiatrist",
    psychiatristPhone: "+16124566096",
    psychiatristAddress: "129 Psych St",
    otherProfessionalRole: "Therapist",
    otherProfessionalName: "Therapist Name",
    otherProfessionalPhone: "+16124566097",
    otherProfessionalAddress: "130 Therapy St",
    clientInsurance: "Blue Cross",
    clientPolicy: "POL123456",
    childEthnicity: "Other",
    otherPrimaryLanguage: "None",
    otherSecondaryLanguage: "None",
    referentName: "Referent",
    referentRelationship: "Doctor",
    referentPhone: "+16124566098",
    referentEmail: "referent@example.com",
    referentReason: "Testing",
    insuranceCard: [],
    wellChild: [],
    iep: [],
    diagnosticAssessment: [],
    schoolEvaluation: [],
  };
};
