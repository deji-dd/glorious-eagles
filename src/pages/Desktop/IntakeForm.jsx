import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Check } from "lucide-react";
import { FileUpload } from "@/components/fileInput";
import { processFormData } from "../../../functions/emails";
import { Loader2 } from "lucide-react"; // Import the Loader from Luicide (or similar package)
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function IntakeForm() {
  const [steps, setSteps] = useState([
    { id: 1, name: "Personal Information", status: "current" },
    { id: 2, name: "Financial Information", status: "upcoming" },
    { id: 3, name: "Medical Information", status: "upcoming" },
    { id: 4, name: "Contact Information", status: "upcoming" },
    { id: 5, name: "Other Information", status: "upcoming" },
    { id: 6, name: "Upload Documents", status: "upcoming" },
  ]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [skippedSections, setSkippedSections] = useState({
    financialInfo: false,
    generalInfo: false,
  });
  const [formData, setFormData] = useState({
    firstName: undefined,
    lastName: undefined,
    address: undefined,
    dateOfBirth: undefined,
    email: undefined,
    cellPhone: undefined,
    homePhone: undefined,
    language: undefined,
    guardianshipType: undefined,
    gender: undefined,
    height: undefined,
    weight: undefined,
    hairColor: undefined,
    eyeColor: undefined,
    ssn: undefined,
    medicalNumber: undefined,
    countyResponsibility: undefined,
    PMINumber: undefined,
    countyFinancialResponsibility: undefined,
    burialAccountNumber: undefined,
    diagnosis: undefined,
    allergies: undefined,
    protocols: undefined,
    medicalEquipment: undefined,
    dietaryNeeds: undefined,
    legalRepresentativeName: undefined,
    legalRepresentativePhone: undefined,
    legalRepresentativeAddress: undefined,
    authorizedRepresentativeName: undefined,
    authorizedRepresentativePhone: undefined,
    authorizedRepresentativeAddress: undefined,
    primaryEmergencyName: undefined,
    primaryEmergencyPhone: undefined,
    primaryEmergencyAddress: undefined,
    caseManagerName: undefined,
    caseManagerPhone: undefined,
    caseManagerAddress: undefined,
    familyMemberName: undefined,
    familyMemberPhone: undefined,
    familyMemberAddress: undefined,
    primaryProfessionalName: undefined,
    primaryProfessionalPhone: undefined,
    primaryProfessionalAddress: undefined,
    psychiatristName: undefined,
    psychiatristPhone: undefined,
    psychiatristAddress: undefined,
    otherProfessionalRole: undefined,
    otherProfessionalName: undefined,
    otherProfessionalPhone: undefined,
    otherProfessionalAddress: undefined,
    clientInsurance: undefined,
    clientPolicy: undefined,
    childEthnicity: undefined,
    otherPrimaryLanguage: undefined,
    otherSecondaryLanguage: undefined,
    referentName: undefined,
    referentRelationship: undefined,
    referentPhone: undefined,
    referentEmail: undefined,
    referentReason: undefined,
    insuranceCard: undefined,
    wellChild: undefined,
    iep: undefined,
    diagnosticAssessment: undefined,
    schoolEvaluation: undefined,
  });
  const [isLoading, setIsLoading] = useState(false);

  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, "").substring(0, 10);
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

    if (match) {
      let formatted = "";
      if (match[1]) formatted += `(${match[1]}`;
      if (match[2]) formatted += `) ${match[2]}`;
      if (match[3]) formatted += ` - ${match[3]}`;
      return formatted;
    }
    return value;
  };

  const handleRadioChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const goToNextStep = () => {
    // Get the form element
    const form = document.querySelector("form");

    // Get all required inputs in the current step in DOM order (top to bottom)
    const requiredInputs = Array.from(form.querySelectorAll("[required]"));

    // Find the first invalid input
    const firstInvalidInput = requiredInputs.find(
      (input) => !input.checkValidity(),
    );

    if (firstInvalidInput) {
      // Focus and show validation message for the first invalid field
      firstInvalidInput.focus();
      firstInvalidInput.reportValidity();

      return; // Don't proceed to next step
    }

    // Only proceed if all validations pass
    if (currentStepIndex < steps.length - 1) {
      const newSteps = [...steps];
      newSteps[currentStepIndex].status = "complete";
      newSteps[currentStepIndex + 1].status = "current";
      setSteps(newSteps);
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStepIndex > 0) {
      const newSteps = [...steps];
      newSteps[currentStepIndex].status = "upcoming";
      newSteps[currentStepIndex - 1].status = "current";
      setSteps(newSteps);
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const requiredFiles = ["insuranceCard", "wellChild"];
    const missingFile = requiredFiles.find(
      (field) => !formData[field] || formData[field].length === 0,
    );

    if (missingFile) {
      alert(
        `Please upload the required file: ${missingFile === "insuranceCard" ? "Insurance Card" : missingFile === "wellChild" ? "Well Child Check-up" : "IEP"}`,
      );
      setIsLoading(false);
      return;
    }

    const { details, attachments } = await processFormData(formData);

    try {
      const res = await fetch("https://email.gloriouseagles.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: formData.email,
          subject: "New Admission Application",
          details, // <- clean key-value fields
          attachments, // <- zipped files as base64
        }),
      });

      const data = await res.json();

      if (!data.success) {
        setIsLoading(false);
        throw new Error(data.error || "Failed to send application");
      }

      if (data.warning) {
        alert(
          "Application sent! (Though receipt confirmation may not have been delivered)",
        );
        window.location.reload();
      } else {
        alert(
          "Application sent successfully! Check your email for confirmation.",
        );
        window.location.reload();
      }
    } catch (err) {
      alert("Failed to send application: " + err.message);
      setIsLoading(false);
    }
  };

  const toggleSkipSection = (sectionKey) => {
    setSkippedSections((prev) => {
      const newSkipState = !prev[sectionKey];

      // If skipping, null out related fields
      if (newSkipState) {
        setFormData((prevForm) => ({
          ...prevForm,
          ...(sectionKey === "identifyingCharacteristics" && {
            height: undefined,
            weight: undefined,
            hairColor: undefined,
            eyeColor: undefined,
          }),
          ...(sectionKey === "financialInfo" && {
            ssn: undefined,
            medicalNumber: undefined,
            countyResponsibility: undefined,
            PMINumber: undefined,
            countyFinancialResponsibility: undefined,
            burialAccountNumber: undefined,
            clientInsurance: undefined,
            clientPolicy: undefined,
          }),
          ...(sectionKey === "generalInfo" && {
            primaryProfessionalName: undefined,
            primaryProfessionalPhone: undefined,
            primaryProfessionalAddress: undefined,
            psychiatristName: undefined,
            psychiatristPhone: undefined,
            psychiatristAddress: undefined,
            otherProfessionalName: undefined,
            otherProfessionalPhone: undefined,
            otherProfessionalAddress: undefined,
          }),
        }));
      }

      return {
        ...prev,
        [sectionKey]: newSkipState,
      };
    });
  };

  const isFieldRequired = (fieldName) => {
    const fieldSectionMap = {
      ssn: "financialInfo",
      medicalNumber: "financialInfo",
      countyResponsibility: "financialInfo",
      PMINumber: "financialInfo",
      // Optional fields are left out
    };

    const sectionKey = fieldSectionMap[fieldName];

    // If there's no mapped section, treat as required
    if (!sectionKey) return true;

    // If section is skipped, field is NOT required
    return !skippedSections[sectionKey];
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "cellPhone" || name === "homePhone") {
      const formattedValue = formatPhoneNumber(value);
      setFormData((prev) => ({
        ...prev,
        [name]: formattedValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const renderStepContent = () => {
    switch (currentStepIndex) {
      case 0: // Personal Information
        return (
          <div data-step="0">
            <div className="bg-white rounded-lg p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="mt-1"
                    type="text"
                    required={isFieldRequired("firstName")}
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="mt-1"
                    type="text"
                    required={isFieldRequired("lastName")}
                  />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="mt-1"
                    type="text"
                    required={isFieldRequired("address")}
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <Label htmlFor="dateOfBirth">Date of birth</Label>
                  <DatePicker
                    selected={formData.dateOfBirth}
                    onChange={(date) =>
                      setFormData({ ...formData, dateOfBirth: date })
                    }
                    dateFormat="MM/dd/yyyy"
                    placeholderText="MM/DD/YYYY"
                    className={cn(
                      "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-11 w-full min-w-0 border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                      "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                      "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                      // Keeping any additional classes
                    )}
                    required={isFieldRequired("dateOfBirth")}
                  />
                  {/* <Input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    placeholder="MM/DD/YYYY"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="mt-1"
                    required={isFieldRequired("dateOfBirth")}
                  /> */}
                </div>
                <div>
                  <Label className="" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1"
                    required={isFieldRequired("email")}
                  />
                </div>
                <div>
                  <Label className="" htmlFor="cellPhone">
                    Cell phone number
                  </Label>
                  <div className="flex mt-1">
                    <div className="flex items-center justify-center bg-gray-100 border border-r-0 rounded-l-md px-3">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_611_558)">
                          <path
                            d="M12.3892 24.1681C19.0166 24.1681 24.3892 18.7955 24.3892 12.1681C24.3892 5.54067 19.0166 0.168091 12.3892 0.168091C5.76174 0.168091 0.38916 5.54067 0.38916 12.1681C0.38916 18.7955 5.76174 24.1681 12.3892 24.1681Z"
                            fill="#F0F0F0"
                          />
                          <path
                            d="M11.8676 12.1682H24.3893C24.3893 11.0851 24.245 10.0359 23.9759 9.03778H11.8676V12.1682Z"
                            fill="#D80027"
                          />
                          <path
                            d="M11.8676 5.90737H22.6281C21.8935 4.70868 20.9542 3.64917 19.8591 2.77692H11.8676V5.90737Z"
                            fill="#D80027"
                          />
                          <path
                            d="M12.3893 24.1683C15.2135 24.1683 17.8093 23.1921 19.8591 21.5596H4.91949C6.96934 23.1921 9.56513 24.1683 12.3893 24.1683Z"
                            fill="#D80027"
                          />
                          <path
                            d="M2.15062 18.4291H22.6281C23.2178 17.4668 23.6752 16.4149 23.976 15.2986H0.802734C1.10353 16.4149 1.56089 17.4668 2.15062 18.4291Z"
                            fill="#D80027"
                          />
                          <path
                            d="M5.94779 2.04206H7.04133L6.02414 2.78104L6.41269 3.97678L5.39555 3.23779L4.37841 3.97678L4.71404 2.94379C3.81844 3.68981 3.03347 4.56384 2.3866 5.53772H2.73699L2.0895 6.00811C1.98863 6.17639 1.89188 6.34734 1.79916 6.52082L2.10835 7.47243L1.5315 7.05332C1.38811 7.35712 1.25696 7.66776 1.13907 7.98487L1.47971 9.03337H2.73699L1.7198 9.77236L2.10835 10.9681L1.09121 10.2291L0.481926 10.6718C0.420941 11.162 0.38916 11.6613 0.38916 12.1681H12.3892C12.3892 5.54072 12.3892 4.7594 12.3892 0.168091C10.0186 0.168091 7.80877 0.855747 5.94779 2.04206ZM6.41269 10.9681L5.39555 10.2291L4.37841 10.9681L4.76696 9.77236L3.74977 9.03337H5.00705L5.39555 7.83764L5.78405 9.03337H7.04133L6.02414 9.77236L6.41269 10.9681ZM6.02414 6.2767L6.41269 7.47243L5.39555 6.73345L4.37841 7.47243L4.76696 6.2767L3.74977 5.53772H5.00705L5.39555 4.34198L5.78405 5.53772H7.04133L6.02414 6.2767ZM10.717 10.9681L9.69989 10.2291L8.68275 10.9681L9.0713 9.77236L8.05411 9.03337H9.31139L9.69989 7.83764L10.0884 9.03337H11.3457L10.3285 9.77236L10.717 10.9681ZM10.3285 6.2767L10.717 7.47243L9.69989 6.73345L8.68275 7.47243L9.0713 6.2767L8.05411 5.53772H9.31139L9.69989 4.34198L10.0884 5.53772H11.3457L10.3285 6.2767ZM10.3285 2.78104L10.717 3.97678L9.69989 3.23779L8.68275 3.97678L9.0713 2.78104L8.05411 2.04206H9.31139L9.69989 0.846325L10.0884 2.04206H11.3457L10.3285 2.78104Z"
                            fill="#0052B4"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_611_558">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="translate(0.389343 0.168213)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <Input
                      required={isFieldRequired("cellPhone")}
                      id="cellPhone"
                      name="cellPhone"
                      placeholder="(555) 555 - 5555"
                      value={formData.cellPhone}
                      onChange={handleInputChange}
                      className="rounded-l-none"
                      type="tel"
                      onKeyDown={(e) => {
                        // Allow: backspace, delete, tab, escape, enter
                        if (
                          [46, 8, 9, 27, 13].includes(e.keyCode) ||
                          // Allow: Ctrl+A, Ctrl+C, Ctrl+X
                          (e.keyCode === 65 && e.ctrlKey === true) ||
                          (e.keyCode === 67 && e.ctrlKey === true) ||
                          (e.keyCode === 88 && e.ctrlKey === true) ||
                          // Allow: home, end, left, right
                          (e.keyCode >= 35 && e.keyCode <= 39)
                        ) {
                          return;
                        }
                        // Ensure it's a number and stop the keypress if not
                        if (
                          (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
                          (e.keyCode < 96 || e.keyCode > 105)
                        ) {
                          e.preventDefault();
                        }
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <Label className="" htmlFor="homePhone">
                      Home telephone number:
                    </Label>
                    <span className="text-sm text-gray-500">Optional</span>
                  </div>
                  <div className="flex mt-1">
                    <div className="flex items-center justify-center bg-gray-100 border border-r-0 rounded-l-md px-3">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_611_558)">
                          <path
                            d="M12.3892 24.1681C19.0166 24.1681 24.3892 18.7955 24.3892 12.1681C24.3892 5.54067 19.0166 0.168091 12.3892 0.168091C5.76174 0.168091 0.38916 5.54067 0.38916 12.1681C0.38916 18.7955 5.76174 24.1681 12.3892 24.1681Z"
                            fill="#F0F0F0"
                          />
                          <path
                            d="M11.8676 12.1682H24.3893C24.3893 11.0851 24.245 10.0359 23.9759 9.03778H11.8676V12.1682Z"
                            fill="#D80027"
                          />
                          <path
                            d="M11.8676 5.90737H22.6281C21.8935 4.70868 20.9542 3.64917 19.8591 2.77692H11.8676V5.90737Z"
                            fill="#D80027"
                          />
                          <path
                            d="M12.3893 24.1683C15.2135 24.1683 17.8093 23.1921 19.8591 21.5596H4.91949C6.96934 23.1921 9.56513 24.1683 12.3893 24.1683Z"
                            fill="#D80027"
                          />
                          <path
                            d="M2.15062 18.4291H22.6281C23.2178 17.4668 23.6752 16.4149 23.976 15.2986H0.802734C1.10353 16.4149 1.56089 17.4668 2.15062 18.4291Z"
                            fill="#D80027"
                          />
                          <path
                            d="M5.94779 2.04206H7.04133L6.02414 2.78104L6.41269 3.97678L5.39555 3.23779L4.37841 3.97678L4.71404 2.94379C3.81844 3.68981 3.03347 4.56384 2.3866 5.53772H2.73699L2.0895 6.00811C1.98863 6.17639 1.89188 6.34734 1.79916 6.52082L2.10835 7.47243L1.5315 7.05332C1.38811 7.35712 1.25696 7.66776 1.13907 7.98487L1.47971 9.03337H2.73699L1.7198 9.77236L2.10835 10.9681L1.09121 10.2291L0.481926 10.6718C0.420941 11.162 0.38916 11.6613 0.38916 12.1681H12.3892C12.3892 5.54072 12.3892 4.7594 12.3892 0.168091C10.0186 0.168091 7.80877 0.855747 5.94779 2.04206ZM6.41269 10.9681L5.39555 10.2291L4.37841 10.9681L4.76696 9.77236L3.74977 9.03337H5.00705L5.39555 7.83764L5.78405 9.03337H7.04133L6.02414 9.77236L6.41269 10.9681ZM6.02414 6.2767L6.41269 7.47243L5.39555 6.73345L4.37841 7.47243L4.76696 6.2767L3.74977 5.53772H5.00705L5.39555 4.34198L5.78405 5.53772H7.04133L6.02414 6.2767ZM10.717 10.9681L9.69989 10.2291L8.68275 10.9681L9.0713 9.77236L8.05411 9.03337H9.31139L9.69989 7.83764L10.0884 9.03337H11.3457L10.3285 9.77236L10.717 10.9681ZM10.3285 6.2767L10.717 7.47243L9.69989 6.73345L8.68275 7.47243L9.0713 6.2767L8.05411 5.53772H9.31139L9.69989 4.34198L10.0884 5.53772H11.3457L10.3285 6.2767ZM10.3285 2.78104L10.717 3.97678L9.69989 3.23779L8.68275 3.97678L9.0713 2.78104L8.05411 2.04206H9.31139L9.69989 0.846325L10.0884 2.04206H11.3457L10.3285 2.78104Z"
                            fill="#0052B4"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_611_558">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="translate(0.389343 0.168213)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <Input
                      id="homePhone"
                      name="homePhone"
                      placeholder="(555) 555 - 5555"
                      value={formData.homePhone}
                      onChange={handleInputChange}
                      className="rounded-l-none"
                      type="tel"
                      onKeyDown={(e) => {
                        // Allow control keys
                        if (
                          [46, 8, 9, 27, 13].includes(e.keyCode) ||
                          (e.keyCode >= 35 && e.keyCode <= 39) ||
                          (e.ctrlKey && [65, 67, 88].includes(e.keyCode))
                        ) {
                          return;
                        }
                        // Block non-numeric input
                        if (
                          (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
                          (e.keyCode < 96 || e.keyCode > 105)
                        ) {
                          e.preventDefault();
                        }
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <Label className="" htmlFor="language">
                      Language(s) spoken
                    </Label>
                    <span className="text-sm text-gray-500">Optional</span>
                  </div>
                  <Input
                    id="language"
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                    className="mt-1"
                    type="text"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <Label htmlFor="gender">Gender</Label>
                  <RadioGroup
                    required={isFieldRequired("gender")}
                    value={formData.gender}
                    onValueChange={(value) =>
                      handleRadioChange("gender", value)
                    }
                    style={{ display: "flex", gap: "16px" }}
                  >
                    {["Male", "Female", "Prefer not to say"].map((option) => (
                      <label
                        key={option}
                        htmlFor={option}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          border: "1px solid",
                          padding: "8px 16px",
                          cursor: "pointer",
                          backgroundColor:
                            formData.gender === option ? "#dbeafe" : "white",
                          borderColor:
                            formData.gender === option ? "#3b82f6" : "#e2e8f0",
                        }}
                      >
                        <RadioGroupItem
                          value={option}
                          id={option}
                          style={{
                            width: "16px",
                            height: "16px",
                            padding: 0,
                          }}
                        />
                        <span style={{ cursor: "pointer" }}>{option}</span>
                      </label>
                    ))}
                  </RadioGroup>
                </div>

                <div className="flex flex-col justify-between">
                  <div className="flex justify-between">
                    <Label htmlFor="guardianshipType">Guardianship type</Label>
                    <span className="text-sm text-gray-500">Optional</span>
                  </div>
                  <RadioGroup
                    value={formData.guardianshipType}
                    onValueChange={(value) =>
                      handleRadioChange("guardianshipType", value)
                    }
                    style={{ display: "flex", gap: "16px" }}
                  >
                    {["Self", "Private", "Public"].map((option) => (
                      <label
                        key={option}
                        htmlFor={option}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          border: "1px solid",
                          padding: "8px 16px",
                          cursor: "pointer",
                          backgroundColor:
                            formData.guardianshipType === option
                              ? "#dbeafe"
                              : "white",
                          borderColor:
                            formData.guardianshipType === option
                              ? "#3b82f6"
                              : "#e2e8f0",
                        }}
                      >
                        <RadioGroupItem
                          value={option}
                          id={option}
                          style={{ width: "16px", height: "16px", padding: 0 }}
                        />
                        <span
                          style={{
                            cursor: "pointer",
                            textTransform: "capitalize",
                          }}
                        >
                          {option}
                        </span>
                      </label>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <h4 className="text-xl font-semibold text-[#180344]">
                  Identifying Characteristics
                </h4>
              </div>

              <div className="bg-white rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex justify-between">
                      <Label className="" htmlFor="height">
                        Height
                      </Label>
                    </div>

                    <div className="relative mt-1">
                      <Input
                        required={isFieldRequired("height")}
                        id="height"
                        name="height"
                        value={formData.height}
                        onChange={handleInputChange}
                        className="pr-12"
                        type="text"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                        ft
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <Label className="" htmlFor="weight">
                        Weight
                      </Label>
                    </div>

                    <div className="relative mt-1">
                      <Input
                        required={isFieldRequired("weight")}
                        type="text"
                        id="weight"
                        name="weight"
                        value={formData.weight}
                        onChange={handleInputChange}
                        className="pr-12"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                        lbs
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <Label className="" htmlFor="hairColor">
                        Hair color
                      </Label>
                    </div>

                    <Input
                      required={isFieldRequired("hairColor")}
                      type="text"
                      id="hairColor"
                      name="hairColor"
                      value={formData.hairColor}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <Label className="" htmlFor="eyeColor">
                        Eye color
                      </Label>
                    </div>

                    <Input
                      required={isFieldRequired("eyeColor")}
                      type="text"
                      id="eyeColor"
                      name="eyeColor"
                      value={formData.eyeColor}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 1: // Financial Information
        return (
          <div data-step="1" className="mb-12">
            {!skippedSections.financialInfo ? (
              <div className="bg-white rounded-lg p-8 mb-8">
                <Button
                  type="button"
                  variant="flat"
                  className="px-0 underline mb-3"
                  onClick={() => toggleSkipSection("financialInfo")}
                  size="md"
                >
                  <p>Skip Section</p>
                </Button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">
                      Social Security Number (SSN)
                    </Label>
                    <Input
                      id="ssn"
                      name="ssn"
                      value={formData.ssn}
                      onChange={handleInputChange}
                      className="mt-1"
                      type="password"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="medicalNumber">
                      Medical Assistance Number
                    </Label>
                    <Input
                      id="medicalNumber"
                      name="medicalNumber"
                      value={formData.medicalNumber}
                      onChange={handleInputChange}
                      className="mt-1"
                      type="text"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="countyResponsibility">
                      County of Responsibility
                    </Label>
                    <Input
                      id="countyResponsibility"
                      name="countyResponsibility"
                      value={formData.countyResponsibility}
                      onChange={handleInputChange}
                      className="mt-1"
                      type="text"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="PMINumber">PMI Number</Label>
                    <Input
                      id="PMINumber"
                      name="PMINumber"
                      value={formData.PMINumber}
                      onChange={handleInputChange}
                      className="mt-1"
                      type="text"
                      required
                    />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <Label
                        className=""
                        htmlFor="countyFinancialResponsibility"
                      >
                        County of Financial Responsibility
                      </Label>
                      <span className="text-sm text-gray-500">Optional</span>
                    </div>
                    <Input
                      id="countyFinancialResponsibility"
                      name="countyFinancialResponsibility"
                      value={formData.countyFinancialResponsibility}
                      onChange={handleInputChange}
                      className="mt-1"
                      type="text"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <Label className="" htmlFor="burialAccountNumber">
                        Burial Account Number
                      </Label>
                      <span className="text-sm text-gray-500">Optional</span>
                    </div>
                    <Input
                      id="burialAccountNumber"
                      name="burialAccountNumber"
                      value={formData.burialAccountNumber}
                      onChange={handleInputChange}
                      className="mt-1"
                      type="text"
                    />
                  </div>
                  <div>
                    <Label htmlFor="clientInsurance">Insurance</Label>
                    <Input
                      id="clientInsurance"
                      name="clientInsurance"
                      value={formData.clientInsurance}
                      onChange={handleInputChange}
                      className="mt-1"
                      type="text"
                      required={isFieldRequired("clientInsurance")}
                    />
                  </div>
                  <div>
                    <Label htmlFor="clientPolicy">Policy #</Label>
                    <Input
                      id="clientPolicy"
                      name="clientPolicy"
                      value={formData.clientPolicy}
                      onChange={handleInputChange}
                      className="mt-1"
                      type="text"
                      required={isFieldRequired("clientPolicy")}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg p-8">
                <Button
                  type="button"
                  variant="flat"
                  className="mb-6 px-0 underline"
                  onClick={() => toggleSkipSection("financialInfo")}
                  size="md"
                >
                  Add Section
                </Button>
              </div>
            )}
          </div>
        );
      case 2: // Medical Information
        return (
          <div data-step="2" className="mb-12">
            <div className="bg-white rounded-lg p-8 mb-8">
              <div className="flex flex-col gap-3">
                <div>
                  <Label htmlFor="diagnosis">Diagnosis</Label>
                  <Input
                    id="diagnosis"
                    name="diagnosis"
                    value={formData.diagnosis}
                    onChange={handleInputChange}
                    className="mt-1"
                    type="text"
                    required={isFieldRequired("diagnosis")}
                  />
                </div>
                <div>
                  <Label htmlFor="allergies">Allergies</Label>
                  <Input
                    id="allergies"
                    name="allergies"
                    value={formData.allergies}
                    onChange={handleInputChange}
                    className="mt-1"
                    type="text"
                    required={isFieldRequired("allergies")}
                  />
                </div>
                <div>
                  <Label htmlFor="protocols">
                    Protocols (seizure, diabetic, etc.)
                  </Label>
                  <Input
                    id="protocols"
                    name="protocols"
                    value={formData.protocols}
                    onChange={handleInputChange}
                    className="mt-1"
                    type="text"
                    required={isFieldRequired("protocols")}
                  />
                </div>
                <div>
                  <Label htmlFor="medicalEquipment">
                    Medical equipment, devices, or adaptive aides or technology
                    used
                  </Label>
                  <Input
                    id="medicalEquipment"
                    name="medicalEquipment"
                    value={formData.medicalEquipment}
                    onChange={handleInputChange}
                    className="mt-1"
                    type="text"
                    required={isFieldRequired("medicalEquipment")}
                  />
                </div>
                <div>
                  <Label htmlFor="dietaryNeeds">
                    Specialized dietary needs
                  </Label>
                  <Input
                    id="dietaryNeeds"
                    name="dietaryNeeds"
                    value={formData.dietaryNeeds}
                    onChange={handleInputChange}
                    className="mt-1"
                    type="text"
                    required={isFieldRequired("dietaryNeeds")}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 3: // Contact Information
        return (
          <div data-step="3">
            <div className="bg-white rounded-lg p-8 mb-8 flex flex-col gap-3">
              <div className="flex flex-col gap-3">
                <p className="text-muted">Legal representative:</p>
                <div
                  style={{ backgroundColor: "#FCFBFF", padding: "1rem" }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div>
                    <Label htmlFor="legalRepresentativeName">Name</Label>
                    <Input
                      id="legalRepresentativeName"
                      name="legalRepresentativeName"
                      value={formData.legalRepresentativeName}
                      onChange={handleInputChange}
                      className="mt-1"
                      type="text"
                      required={isFieldRequired("legalRepresentativeName")}
                    />
                  </div>
                  <div>
                    <Label htmlFor="legalRepresentativePhone">
                      Telephone Number
                    </Label>
                    <Input
                      id="legalRepresentativePhone"
                      name="legalRepresentativePhone"
                      value={formData.legalRepresentativePhone}
                      onChange={handleInputChange}
                      className="mt-1"
                      type="text"
                      required={isFieldRequired("legalRepresentativePhone")}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="legalRepresentativeAddress">Address</Label>
                    <Input
                      id="legalRepresentativeAddress"
                      name="legalRepresentativeAddress"
                      value={formData.legalRepresentativeAddress}
                      onChange={handleInputChange}
                      className="mt-1"
                      type="text"
                      required={isFieldRequired("legalRepresentativeAddress")}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-muted">Authorized representative:</p>
                <div
                  style={{ backgroundColor: "#FCFBFF", padding: "1rem" }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div>
                    <Label htmlFor="authorizedRepresentativeName">Name</Label>
                    <Input
                      id="authorizedRepresentativeName"
                      name="authorizedRepresentativeName"
                      value={formData.authorizedRepresentativeName}
                      onChange={handleInputChange}
                      className="mt-1"
                      type="text"
                      required={isFieldRequired("authorizedRepresentativeName")}
                    />
                  </div>
                  <div>
                    <Label htmlFor="authorizedRepresentativePhone">
                      Telephone Number
                    </Label>
                    <Input
                      id="authorizedRepresentativePhone"
                      name="authorizedRepresentativePhone"
                      value={formData.authorizedRepresentativePhone}
                      onChange={handleInputChange}
                      className="mt-1"
                      type="text"
                      required={isFieldRequired(
                        "authorizedRepresentativePhone",
                      )}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="authorizedRepresentativeAddress">
                      Address
                    </Label>
                    <Input
                      id="authorizedRepresentativeAddress"
                      name="authorizedRepresentativeAddress"
                      value={formData.authorizedRepresentativeAddress}
                      onChange={handleInputChange}
                      className="mt-1"
                      type="text"
                      required={isFieldRequired(
                        "authorizedRepresentativeAddress",
                      )}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-muted">Primary emergency contact:</p>
                <div
                  style={{ backgroundColor: "#FCFBFF", padding: "1rem" }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div>
                    <Label htmlFor="primaryEmergencyName">Name</Label>
                    <Input
                      id="primaryEmergencyName"
                      name="primaryEmergencyName"
                      value={formData.primaryEmergencyName}
                      onChange={handleInputChange}
                      className="mt-1"
                      type="text"
                      required={isFieldRequired("primaryEmergencyName")}
                    />
                  </div>
                  <div>
                    <Label htmlFor="primaryEmergencyPhone">
                      Telephone Number
                    </Label>
                    <Input
                      id="primaryEmergencyPhone"
                      name="primaryEmergencyPhone"
                      value={formData.primaryEmergencyPhone}
                      onChange={handleInputChange}
                      className="mt-1"
                      type="text"
                      required={isFieldRequired("primaryEmergencyPhone")}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="primaryEmergencyAddress">Address</Label>
                    <Input
                      id="primaryEmergencyAddress"
                      name="primaryEmergencyAddress"
                      value={formData.primaryEmergencyAddress}
                      onChange={handleInputChange}
                      className="mt-1"
                      type="text"
                      required={isFieldRequired("primaryEmergencyAddress")}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-muted">Case manager:</p>
                <div
                  style={{ backgroundColor: "#FCFBFF", padding: "1rem" }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div>
                    <Label htmlFor="caseManagerName">Name</Label>
                    <Input
                      id="caseManagerName"
                      name="caseManagerName"
                      value={formData.caseManagerName}
                      onChange={handleInputChange}
                      className="mt-1"
                      type="text"
                      required={isFieldRequired("caseManagerName")}
                    />
                  </div>
                  <div>
                    <Label htmlFor="caseManagerPhone">Telephone Number</Label>
                    <Input
                      id="caseManagerPhone"
                      name="caseManagerPhone"
                      value={formData.caseManagerPhone}
                      onChange={handleInputChange}
                      className="mt-1"
                      type="text"
                      required={isFieldRequired("caseManagerPhone")}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="caseManagerAddress">Address</Label>
                    <Input
                      id="caseManagerAddress"
                      name="caseManagerAddress"
                      value={formData.caseManagerAddress}
                      onChange={handleInputChange}
                      className="mt-1"
                      type="text"
                      required={isFieldRequired("caseManagerAddress")}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-muted">Family member:</p>
                <div
                  style={{ backgroundColor: "#FCFBFF", padding: "1rem" }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div>
                    <Label htmlFor="familyMemberName">Name</Label>
                    <Input
                      id="familyMemberName"
                      name="familyMemberName"
                      value={formData.familyMemberName}
                      onChange={handleInputChange}
                      className="mt-1"
                      type="text"
                      required={isFieldRequired("familyMemberName")}
                    />
                  </div>
                  <div>
                    <Label htmlFor="familyMemberPhone">Telephone Number</Label>
                    <Input
                      id="familyMemberPhone"
                      name="familyMemberPhone"
                      value={formData.familyMemberPhone}
                      onChange={handleInputChange}
                      className="mt-1"
                      type="text"
                      required={isFieldRequired("familyMemberPhone")}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="familyMemberAddress">Address</Label>
                    <Input
                      id="familyMemberAddress"
                      name="familyMemberAddress"
                      value={formData.familyMemberAddress}
                      onChange={handleInputChange}
                      className="mt-1"
                      type="text"
                      required={isFieldRequired("familyMemberAddress")}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <h4 className="text-xl font-semibold text-[#180344]">
                  Health Related Contact Information
                </h4>
                <span className="px-4 py-1 bg-transparent text-[#180344] text-sm rounded-full border border-black border-solid">
                  Optional section
                </span>
              </div>

              {!skippedSections.generalInfo ? (
                <div className="bg-white rounded-lg p-8">
                  <Button
                    type="button"
                    variant="flat"
                    className="px-0 underline mb-3"
                    onClick={() => toggleSkipSection("generalInfo")}
                    size="md"
                  >
                    <p>Skip Section</p>
                  </Button>

                  <div className="bg-white rounded-lg p-0 mb-8 flex flex-col gap-3">
                    <div className="flex flex-col gap-3">
                      <p className="text-muted">
                        Primary health care professional:
                      </p>
                      <div
                        style={{ backgroundColor: "#FCFBFF", padding: "1rem" }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      >
                        <div>
                          <Label htmlFor="primaryProfessionalName">Name</Label>
                          <Input
                            id="primaryProfessionalName"
                            name="primaryProfessionalName"
                            value={formData.primaryProfessionalName}
                            onChange={handleInputChange}
                            className="mt-1"
                            type="text"
                            required={isFieldRequired(
                              "primaryProfessionalName",
                            )}
                          />
                        </div>
                        <div>
                          <Label htmlFor="primaryProfessionalPhone">
                            Telephone Number
                          </Label>
                          <Input
                            id="primaryProfessionalPhone"
                            name="primaryProfessionalPhone"
                            value={formData.primaryProfessionalPhone}
                            onChange={handleInputChange}
                            className="mt-1"
                            type="text"
                            required={isFieldRequired(
                              "primaryProfessionalPhone",
                            )}
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="primaryProfessionalAddress">
                            Address
                          </Label>
                          <Input
                            id="primaryProfessionalAddress"
                            name="primaryProfessionalAddress"
                            value={formData.primaryProfessionalAddress}
                            onChange={handleInputChange}
                            className="mt-1"
                            type="text"
                            required={isFieldRequired(
                              "primaryProfessionalAddress",
                            )}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <p className="text-muted">Psychiatrist:</p>
                      <div
                        style={{ backgroundColor: "#FCFBFF", padding: "1rem" }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      >
                        <div>
                          <Label htmlFor="psychiatristName">Name</Label>
                          <Input
                            id="psychiatristName"
                            name="psychiatristName"
                            value={formData.psychiatristName}
                            onChange={handleInputChange}
                            className="mt-1"
                            type="text"
                            required={isFieldRequired("psychiatristName")}
                          />
                        </div>
                        <div>
                          <Label htmlFor="psychiatristPhone">
                            Telephone Number
                          </Label>
                          <Input
                            id="psychiatristPhone"
                            name="psychiatristPhone"
                            value={formData.psychiatristPhone}
                            onChange={handleInputChange}
                            className="mt-1"
                            type="text"
                            required={isFieldRequired("psychiatristPhone")}
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="psychiatristAddress">Address</Label>
                          <Input
                            id="psychiatristAddress"
                            name="psychiatristAddress"
                            value={formData.psychiatristAddress}
                            onChange={handleInputChange}
                            className="mt-1"
                            type="text"
                            required={isFieldRequired("psychiatristAddress")}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <p className="text-muted">Other health professional:</p>
                      <div
                        style={{ backgroundColor: "#FCFBFF", padding: "1rem" }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      >
                        <div>
                          <Label htmlFor="otherProfessionalRole">Role</Label>
                          <Input
                            id="otherProfessionalRole"
                            name="otherProfessionalRole"
                            value={formData.otherProfessionalRole}
                            onChange={handleInputChange}
                            className="mt-1"
                            type="text"
                            required={isFieldRequired("otherProfessionalRole")}
                          />
                        </div>
                        <div>
                          <Label htmlFor="otherProfessionalName">Name</Label>
                          <Input
                            id="otherProfessionalName"
                            name="otherProfessionalName"
                            value={formData.otherProfessionalName}
                            onChange={handleInputChange}
                            className="mt-1"
                            type="text"
                            required={isFieldRequired("otherProfessionalName")}
                          />
                        </div>
                        <div>
                          <Label htmlFor="otherProfessionalPhone">
                            Telephone Number
                          </Label>
                          <Input
                            id="otherProfessionalPhone"
                            name="otherProfessionalPhone"
                            value={formData.otherProfessionalPhone}
                            onChange={handleInputChange}
                            className="mt-1"
                            type="text"
                            required={isFieldRequired("otherProfessionalPhone")}
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="otherProfessionalAddress">
                            Address
                          </Label>
                          <Input
                            id="otherProfessionalAddress"
                            name="otherProfessionalAddress"
                            value={formData.otherProfessionalAddress}
                            onChange={handleInputChange}
                            className="mt-1"
                            type="text"
                            required={isFieldRequired(
                              "otherProfessionalAddress",
                            )}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <p className="text-muted">Case manager:</p>
                      <div
                        style={{ backgroundColor: "#FCFBFF", padding: "1rem" }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      >
                        <div>
                          <Label htmlFor="caseManagerName">Name</Label>
                          <Input
                            id="caseManagerName"
                            name="caseManagerName"
                            value={formData.caseManagerName}
                            onChange={handleInputChange}
                            className="mt-1"
                            type="text"
                            required={isFieldRequired("caseManagerName")}
                          />
                        </div>
                        <div>
                          <Label htmlFor="caseManagerPhone">
                            Telephone Number
                          </Label>
                          <Input
                            id="caseManagerPhone"
                            name="caseManagerPhone"
                            value={formData.caseManagerPhone}
                            onChange={handleInputChange}
                            className="mt-1"
                            type="text"
                            required={isFieldRequired("caseManagerPhone")}
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="caseManagerAddress">Address</Label>
                          <Input
                            id="caseManagerAddress"
                            name="caseManagerAddress"
                            value={formData.caseManagerAddress}
                            onChange={handleInputChange}
                            className="mt-1"
                            type="text"
                            required={isFieldRequired("caseManagerAddress")}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <p className="text-muted">Family member:</p>
                      <div
                        style={{ backgroundColor: "#FCFBFF", padding: "1rem" }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      >
                        <div>
                          <Label htmlFor="caseManagerName">Name</Label>
                          <Input
                            id="caseManagerName"
                            name="caseManagerName"
                            value={formData.caseManagerName}
                            onChange={handleInputChange}
                            className="mt-1"
                            type="text"
                            required={isFieldRequired("caseManagerName")}
                          />
                        </div>
                        <div>
                          <Label htmlFor="caseManagerPhone">
                            Telephone Number
                          </Label>
                          <Input
                            id="caseManagerPhone"
                            name="caseManagerPhone"
                            value={formData.caseManagerPhone}
                            onChange={handleInputChange}
                            className="mt-1"
                            type="text"
                            required={isFieldRequired("caseManagerPhone")}
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="caseManagerAddress">Address</Label>
                          <Input
                            id="caseManagerAddress"
                            name="caseManagerAddress"
                            value={formData.caseManagerAddress}
                            onChange={handleInputChange}
                            className="mt-1"
                            type="text"
                            required={isFieldRequired("caseManagerAddress")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg p-8">
                  <Button
                    type="button"
                    variant="flat"
                    className="mb-6 px-0 underline"
                    onClick={() => toggleSkipSection("generalInfo")}
                    size="md"
                  >
                    Add Section
                  </Button>
                </div>
              )}
            </div>
          </div>
        );
      case 4: // Other Information
        return (
          <div data-step="4">
            <div className="mb-4">
              <h4 className="text-xl text-center md:!text-left font-semibold text-[#180344]">
                Child’s ethnicity/race (check only one)
              </h4>
            </div>
            <div className="bg-white rounded-lg p-8 mb-8">
              <div className="mb-6">
                <RadioGroup
                  required={isFieldRequired("childEthnicity")}
                  value={formData.childEthnicity}
                  onValueChange={(value) =>
                    handleRadioChange("childEthnicity", value)
                  }
                  className="flex flex-col gap-3 mt-2 w-fit"
                >
                  {[
                    "American Indian or Alaska Native",
                    "Native Hawaiian or Pacific Islander",
                    "Asian",
                    "Hispanic or Latino",
                    "Black or African American",
                    "White",
                    "Caucasian",
                  ].map((option) => (
                    <label
                      key={option}
                      htmlFor={option}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        border: "1px solid",
                        padding: "8px 16px",
                        cursor: "pointer",
                        backgroundColor:
                          formData.childEthnicity === option
                            ? "#dbeafe"
                            : "white",
                        borderColor:
                          formData.childEthnicity === option
                            ? "#3b82f6"
                            : "#e2e8f0",
                      }}
                    >
                      <RadioGroupItem
                        value={option}
                        id={option}
                        style={{
                          width: "16px",
                          height: "16px",
                          padding: 0,
                        }}
                      />
                      <span style={{ cursor: "pointer" }}>{option}</span>
                    </label>
                  ))}
                </RadioGroup>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-xl text-center md:!text-left font-semibold text-[#180344]">
                Other Information
              </h4>
            </div>
            <div className="bg-white rounded-lg p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="otherPrimaryLanguage">
                    Primary language spoken at home
                  </Label>
                  <Input
                    id="otherPrimaryLanguage"
                    name="otherPrimaryLanguage"
                    value={formData.otherPrimaryLanguage}
                    onChange={handleInputChange}
                    className="mt-1"
                    type="text"
                    required={isFieldRequired("otherPrimaryLanguage")}
                  />
                </div>
                <div>
                  <Label htmlFor="otherSecondaryLanguage">
                    Secondary language spoken at home (if applicable)
                  </Label>
                  <Input
                    id="otherSecondaryLanguage"
                    name="otherSecondaryLanguage"
                    value={formData.otherSecondaryLanguage}
                    onChange={handleInputChange}
                    className="mt-1"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-xl md:!text-left text-center font-semibold text-[#180344]">
                Referral Information
              </h4>
            </div>
            <div className="bg-white rounded-lg p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="referentName">
                    Name of Person Completing this Form
                  </Label>
                  <Input
                    id="referentName"
                    name="referentName"
                    value={formData.referentName}
                    onChange={handleInputChange}
                    className="mt-1"
                    type="text"
                    required={isFieldRequired("referentName")}
                  />
                </div>
                <div>
                  <Label htmlFor="referentRelationship">
                    Relationship to Child
                  </Label>
                  <Input
                    id="referentRelationship"
                    name="referentRelationship"
                    value={formData.referentRelationship}
                    onChange={handleInputChange}
                    className="mt-1"
                    type="text"
                  />
                </div>
                <div>
                  <Label htmlFor="referentPhone">Phone</Label>
                  <Input
                    id="referentPhone"
                    name="referentPhone"
                    value={formData.referentPhone}
                    onChange={handleInputChange}
                    className="mt-1"
                    type="text"
                  />
                </div>
                <div>
                  <Label htmlFor="referentEmail">Email</Label>
                  <Input
                    id="referentEmail"
                    name="referentEmail"
                    value={formData.referentEmail}
                    onChange={handleInputChange}
                    className="mt-1"
                    type="text"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label className="" htmlFor="referentReason">
                    Reason for Referral (current needs and priorities)
                  </Label>
                  <Textarea
                    required={isFieldRequired("referentReason")}
                    id="referentReason"
                    name="referentReason"
                    value={formData.referentReason}
                    onChange={handleInputChange}
                    placeholder="Content"
                    className="mt-1 h-32"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 5: // Upload Documents
        return (
          <div data-step="5" className="flex flex-col gap-3 mb-3">
            <FileUpload
              title="Insurance card (copy of front and back pages)"
              id="insuranceCard"
              name="insuranceCard"
              files={formData.insuranceCard}
              setFormData={setFormData}
            />
            <FileUpload
              title="Well Child Check-up completed within the last year"
              id="wellChild"
              name="wellChild"
              files={formData.wellChild}
              setFormData={setFormData}
            />
            <FileUpload
              title="An IEP from the past year from the school"
              id="iep"
              name="iep"
              files={formData.iep}
              setFormData={setFormData}
              optional={true}
            />
            <FileUpload
              title="DA-diagnostic assessment"
              id="diagnosticAssessment"
              name="diagnosticAssessment"
              files={formData.diagnosticAssessment}
              setFormData={setFormData}
              optional={true}
            />
            <FileUpload
              title="School full evaluation from the school psychologist"
              id="schoolEvaluation"
              name="schoolEvaluation"
              files={formData.schoolEvaluation}
              setFormData={setFormData}
              optional={true}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="md:px-20">
      <h3 className="text-center mb-5">ADMISSION FORM AND DATA SHEET</h3>
      <div className="w-full py-8 bg-[#f1ebfe] min-h-screen">
        <form onSubmit={handleSubmit}>
          <div className="max-w-6xl mx-auto">
            <nav aria-label="Progress" className="mb-8">
              <ol className="flex items-center px-0 md:px-4 justify-between w-full">
                {steps.map((step, stepIdx) => (
                  <li
                    key={step.id}
                    className="relative flex flex-col items-center flex-1"
                  >
                    {/* Progress line between steps */}
                    {stepIdx !== steps.length - 1 && (
                      <div
                        className={cn(
                          "absolute top-4 md:top-5 left-1/2 w-full h-0.5 border-t-2 border-dashed",
                          step.status === "complete"
                            ? "border-[#10b981]"
                            : "border-[#e2e8f0]",
                        )}
                        aria-hidden="true"
                      />
                    )}

                    {/* Step circle */}
                    <div className="relative z-10 flex items-center justify-center">
                      <span
                        className={cn(
                          "h-8 w-8 md:h-10 md:w-10 rounded-full flex items-center justify-center border-2 bg-white text-xs md:text-sm font-medium",
                          {
                            "border-[#9747ff] bg-[#9747ff] text-white":
                              step.status === "current",
                            "border-[#10b981] text-[#10b981]":
                              step.status === "complete",
                            "border-[#e2e8f0] text-[#94A3B8]":
                              step.status === "upcoming",
                          },
                        )}
                      >
                        {step.status === "complete" ? (
                          <Check className="h-4 w-4 md:h-5 md:w-5 text-current" />
                        ) : (
                          step.id
                        )}
                      </span>
                    </div>

                    {/* Step label - hidden on mobile, visible on md and up */}
                    <span
                      className={cn(
                        "hidden md:block mt-2 md:mt-3 text-sm font-medium",
                        {
                          "text-[#64748B]": step.status !== "complete",
                          "text-[#10b981]": step.status === "complete",
                        },
                      )}
                    >
                      {step.name}
                    </span>
                  </li>
                ))}
              </ol>
            </nav>

            {renderStepContent()}

            <div className="flex justify-between px-2">
              <Button
                type="button"
                onClick={goToPreviousStep}
                disabled={currentStepIndex === 0}
                variant="outline"
                className="button-p"
                size="md"
              >
                Previous
              </Button>

              {currentStepIndex === steps.length - 1 ? (
                <Button
                  type="submit"
                  className="button-p"
                  size="md"
                  variant="outline"
                  disabled={isLoading}
                >
                  {isLoading && <Loader2 className="animate-spin" />}
                  Submit
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={goToNextStep}
                  disabled={currentStepIndex === steps.length - 1}
                  size="md"
                  variant="outline"
                  className="button-p"
                >
                  Next
                </Button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
