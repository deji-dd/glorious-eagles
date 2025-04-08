import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FolderIcon, XCircle, CheckCircle2 } from "lucide-react";

export function FileUpload({
  title,
  id,
  name,
  files = [], // Default empty array
  setFormData,
  optional = false,
}) {
  const [error, setError] = useState(null);

  const validateFile = (file) => {
    const validTypes = ["image/png", "image/jpeg", "application/pdf"];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!validTypes.includes(file.type)) {
      return "Invalid file type (only PNG, JPG, PDF allowed)";
    }
    if (file.size > maxSize) {
      return "File exceeds 5MB limit";
    }
    return null;
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const newFiles = Array.from(e.target.files);
    let validFiles = [];

    // Validate each file
    for (const file of newFiles) {
      const error = validateFile(file);
      if (error) {
        setError(`${file.name}: ${error}`);
        setTimeout(() => setError(null), 5000);
      } else {
        validFiles.push(file);
      }
    }

    if (validFiles.length === 0) return;

    const totalFiles = files.length + validFiles.length;
    if (totalFiles > 3) {
      if (
        !confirm("More than 3 files will be compressed into a ZIP. Continue?")
      ) {
        return;
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: [...(prev[name] || []), ...validFiles],
    }));
  };

  const removeFile = (index) => {
    setFormData((prev) => ({
      ...prev,
      [name]: prev[name].filter((_, i) => i !== index),
    }));
  };

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => {
        e.preventDefault();
        handleFileChange({ target: { files: e.dataTransfer.files } });
      }}
      className="mb-6 px-8"
    >
      <h4 className="text-[#180344] text-center text-lg font-medium mb-2">
        {title}
        {optional && <span className="text-gray-500"> (optional)</span>}
      </h4>

      {/* Error message */}
      {error && (
        <div className="mb-3 p-2 bg-red-50 text-red-600 text-sm rounded flex items-center">
          <XCircle className="h-4 w-4 mr-2" />
          {error}
        </div>
      )}

      <div className="border bg-white border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
        <FolderIcon className="h-8 w-8 text-gray-400 mb-2" />
        <p className="text-gray-700 mb-1">Drag files or click to upload</p>
        <p className="text-gray-500 text-sm mb-4">
          Max 5MB per file (PNG, JPG, PDF)
        </p>

        <Button
          type="button"
          variant="outline"
          className="bg-white"
          onClick={() => document.getElementById(id)?.click()}
        >
          Select Files
        </Button>
        <input
          id={id}
          type="file"
          className="hidden"
          name={name}
          accept=".png,.jpg,.jpeg,.pdf"
          onChange={handleFileChange}
          multiple
        />

        {/* File list */}
        {files.length > 0 && (
          <div className="w-full mt-4">
            <p className="text-sm font-medium mb-2">
              {files.length} file{files.length !== 1 ? "s" : ""} selected
            </p>
            <ul className="space-y-2">
              {files.map((file, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between bg-gray-50 p-2 rounded"
                >
                  <div className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm truncate max-w-[180px]">
                      {file.name}
                    </span>
                    <span className="text-xs text-gray-500 ml-2">
                      {(file.size / 1024).toFixed(1)}KB
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile(index)}
                    className="h-6 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
