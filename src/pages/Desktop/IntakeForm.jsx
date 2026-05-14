import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Check } from "lucide-react";
import { FileUpload } from "@/components/fileInput";
import { Loader2 } from "lucide-react"; // Import the Loader from Luicide (or similar package)
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { isDevMode, generateTestFormData } from "@/lib/devUtils";

export default function IntakeForm() {
  const [steps, setSteps] = useState([
    { id: 1, name: "Form Details", status: "current" },
    { id: 2, name: "Upload Documents", status: "upcoming" },
  ]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
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
    primaryInsuranceName: undefined,
    primaryPmiNumber: undefined,
    secondaryInsuranceName: undefined,
    secondaryPmiNumber: undefined,
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
  const { toast } = useToast();

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
      toast({
        title: "Missing file",
        description: `Please upload the required file: ${missingFile === "insuranceCard" ? "Insurance Card" : missingFile === "wellChild" ? "Well Child Check-up" : "IEP"}`,
        variant: "error",
      });
      setIsLoading(false);
      return;
    }

    try {
      const emailEndpoint = import.meta.env.DEV
        ? "http://localhost:8787"
        : "https://email.gloriouseagles.com";

      const payload = new FormData();

      for (const [key, value] of Object.entries(formData)) {
        if (value === undefined || value === null) {
          continue;
        }

        if (Array.isArray(value)) {
          for (const file of value) {
            payload.append(key, file, file.name);
          }
          continue;
        }

        if (value instanceof Date) {
          payload.append(key, value.toISOString());
          continue;
        }

        payload.append(key, String(value));
      }

      payload.append("subject", "New Admission Application");
      payload.append("to", formData.email || "");

      const res = await fetch(emailEndpoint, {
        method: "POST",
        body: payload,
      });

      const data = await res.json();

      if (!data.success) {
        setIsLoading(false);
        throw new Error(data.error || "Failed to send application");
      }

      if (data.warning) {
        toast({
          title: "Sent with warnings",
          description:
            "Application sent! (Though receipt confirmation may not have been delivered)",
          variant: "info",
        });
        window.location.reload();
      } else {
        toast({
          title: "Sent",
          description:
            "Application sent successfully! Check your email for confirmation.",
          variant: "success",
        });
        window.location.reload();
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to send application: " + err.message,
        variant: "error",
      });
      setIsLoading(false);
    }
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
      case 0:
        return (
          <div data-step="0" className="flex flex-col gap-8">
            <section className="bg-white rounded-lg p-8">
              <h4 className="text-xl font-semibold text-[#180344] mb-6">
                Personal Information
              </h4>
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
                    required
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
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="gender">Gender</Label>
                  <RadioGroup
                    value={formData.gender}
                    onValueChange={(value) =>
                      handleRadioChange("gender", value)
                    }
                    required
                    className="mt-2 flex flex-wrap gap-3"
                  >
                    {["Male", "Female", "Prefer not to say"].map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 rounded border border-[#E5DDF7] bg-white px-3 py-2 text-sm text-[#180344]"
                      >
                        <RadioGroupItem value={option} id={option} />
                        <span>{option}</span>
                      </label>
                    ))}
                  </RadioGroup>
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
                    required
                  />
                </div>
                <div>
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
                    )}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cellPhone">Cell phone number</Label>
                  <Input
                    id="cellPhone"
                    name="cellPhone"
                    placeholder="(555) 555 - 5555"
                    value={formData.cellPhone}
                    onChange={handleInputChange}
                    className="mt-1"
                    type="tel"
                    required
                  />
                </div>
                <div>
                  <div className="flex justify-between">
                    <Label htmlFor="homePhone">Home telephone number</Label>
                    <span className="text-sm text-gray-500">Optional</span>
                  </div>
                  <Input
                    id="homePhone"
                    name="homePhone"
                    placeholder="(555) 555 - 5555"
                    value={formData.homePhone}
                    onChange={handleInputChange}
                    className="mt-1"
                    type="tel"
                  />
                </div>
                <div>
                  <div className="flex justify-between">
                    <Label htmlFor="language">Language(s) spoken</Label>
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
                <div className="md:col-span-2">
                  <div className="flex justify-between">
                    <Label htmlFor="guardianshipType">Guardianship type</Label>
                    <span className="text-sm text-gray-500">Optional</span>
                  </div>
                  <RadioGroup
                    value={formData.guardianshipType}
                    onValueChange={(value) =>
                      handleRadioChange("guardianshipType", value)
                    }
                    className="mt-2 flex flex-wrap gap-3"
                  >
                    {["Self", "Private", "Public"].map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 rounded border border-[#E5DDF7] bg-white px-3 py-2 text-sm text-[#180344]"
                      >
                        <RadioGroupItem value={option} id={option} />
                        <span>{option}</span>
                      </label>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-lg p-8">
              <h4 className="text-xl font-semibold text-[#180344] mb-6">
                Insurance Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="primaryInsuranceName">
                    Primary Insurance Name
                  </Label>
                  <Input
                    id="primaryInsuranceName"
                    name="primaryInsuranceName"
                    value={formData.primaryInsuranceName}
                    onChange={handleInputChange}
                    className="mt-1"
                    type="text"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="primaryPmiNumber">PMI Number</Label>
                  <Input
                    id="primaryPmiNumber"
                    name="primaryPmiNumber"
                    value={formData.primaryPmiNumber}
                    onChange={handleInputChange}
                    className="mt-1"
                    type="text"
                    required
                  />
                </div>
                <div>
                  <div className="flex justify-between">
                    <Label htmlFor="secondaryInsuranceName">
                      Secondary Insurance Name
                    </Label>
                    <span className="text-sm text-gray-500">Optional</span>
                  </div>
                  <Input
                    id="secondaryInsuranceName"
                    name="secondaryInsuranceName"
                    value={formData.secondaryInsuranceName}
                    onChange={handleInputChange}
                    className="mt-1"
                    type="text"
                  />
                </div>
                <div>
                  <div className="flex justify-between">
                    <Label htmlFor="secondaryPmiNumber">PMI Number</Label>
                    <span className="text-sm text-gray-500">Optional</span>
                  </div>
                  <Input
                    id="secondaryPmiNumber"
                    name="secondaryPmiNumber"
                    value={formData.secondaryPmiNumber}
                    onChange={handleInputChange}
                    className="mt-1"
                    type="text"
                  />
                </div>
              </div>
            </section>

            <section className="bg-white rounded-lg p-8">
              <h4 className="text-xl font-semibold text-[#180344] mb-6">
                General Contact Information
              </h4>

              <div className="space-y-6">
                <div className="rounded border border-[#E5DDF7] bg-[#FCFBFF] p-4">
                  <p className="text-sm font-medium text-[#180344] mb-4">
                    Legal Representative:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="legalRepresentativeName">Name</Label>
                      <Input
                        id="legalRepresentativeName"
                        name="legalRepresentativeName"
                        value={formData.legalRepresentativeName}
                        onChange={handleInputChange}
                        className="mt-1"
                        type="text"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="legalRepresentativePhone">
                        Telephone number
                      </Label>
                      <Input
                        id="legalRepresentativePhone"
                        name="legalRepresentativePhone"
                        value={formData.legalRepresentativePhone}
                        onChange={handleInputChange}
                        className="mt-1"
                        type="text"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="legalRepresentativeAddress">
                        Address
                      </Label>
                      <Input
                        id="legalRepresentativeAddress"
                        name="legalRepresentativeAddress"
                        value={formData.legalRepresentativeAddress}
                        onChange={handleInputChange}
                        className="mt-1"
                        type="text"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded border border-[#E5DDF7] bg-[#FCFBFF] p-4">
                  <p className="text-sm font-medium text-[#180344] mb-4">
                    Authorized Representative:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="authorizedRepresentativeName">Name</Label>
                      <Input
                        id="authorizedRepresentativeName"
                        name="authorizedRepresentativeName"
                        value={formData.authorizedRepresentativeName}
                        onChange={handleInputChange}
                        className="mt-1"
                        type="text"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="authorizedRepresentativePhone">
                        Telephone number
                      </Label>
                      <Input
                        id="authorizedRepresentativePhone"
                        name="authorizedRepresentativePhone"
                        value={formData.authorizedRepresentativePhone}
                        onChange={handleInputChange}
                        className="mt-1"
                        type="text"
                        required
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
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded border border-[#E5DDF7] bg-[#FCFBFF] p-4">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-medium text-[#180344]">
                      Case Manager:
                    </p>
                    <span className="text-sm text-gray-500">Optional</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="caseManagerName">Name</Label>
                      <Input
                        id="caseManagerName"
                        name="caseManagerName"
                        value={formData.caseManagerName}
                        onChange={handleInputChange}
                        className="mt-1"
                        type="text"
                      />
                    </div>
                    <div>
                      <Label htmlFor="caseManagerPhone">Telephone number</Label>
                      <Input
                        id="caseManagerPhone"
                        name="caseManagerPhone"
                        value={formData.caseManagerPhone}
                        onChange={handleInputChange}
                        className="mt-1"
                        type="text"
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
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      case 1:
        return (
          <div data-step="1" className="flex flex-col gap-3 mb-3">
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
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-center flex-1">ADMISSION FORM AND DATA SHEET</h3>
        {isDevMode() && (
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={() => {
              const testData = generateTestFormData();
              setFormData(testData);
              setCurrentStepIndex(steps.length - 1);
              const updatedSteps = steps.map((step, idx) => ({
                ...step,
                status: idx < steps.length - 1 ? "complete" : "current",
              }));
              setSteps(updatedSteps);
            }}
            className="ml-auto"
          >
            Load Test Data
          </Button>
        )}
      </div>
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

            <div className="flex justify-between px-2 mt-8">
              <Button
                type="button"
                onClick={goToPreviousStep}
                disabled={currentStepIndex === 0}
                variant="default"
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
                  variant="default"
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
                  variant="default"
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
