import JSZip from "jszip";

export const processFormData = async (rawData) => {
  const cleanedData = {};
  const attachments = [];

  // Mapping custom file names for specific fields
  const fileNameMap = {
    insuranceCard: "Insurance Card Details",
    wellChild: "Well Child Checkup",
    iep: "IEP Documents",
    diagnosticAssessment: "Diagnostic Assessments",
    schoolEvaluation: "School Evaluation From Psychologist",
  };

  const fileFields = Object.keys(fileNameMap); // Using the keys from fileNameMap

  const toBase64 = async (blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(",")[1]); // only base64 part
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });

  const zipFiles = async (files) => {
    const zip = new JSZip();
    for (const file of files) {
      zip.file(file.name, file);
    }
    const blob = await zip.generateAsync({ type: "blob" });
    return await toBase64(blob);
  };

  for (const [key, value] of Object.entries(rawData)) {
    if (fileFields.includes(key) && Array.isArray(value) && value.length) {
      const base64Zip = await zipFiles(value);

      // Get custom filename from fileNameMap
      const customFileName = fileNameMap[key] || key; // Default to field key if no mapping exists

      attachments.push({
        filename: `${customFileName}_${Date.now()}.zip`,
        content: base64Zip,
        type: "application/zip",
      });
    } else if (value !== undefined) {
      cleanedData[key] = value;
    }
  }

  return {
    details: cleanedData,
    attachments,
  };
};
