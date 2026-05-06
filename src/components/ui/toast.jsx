import React from "react";
import { createPortal } from "react-dom";
import { useToast } from "./use-toast";

function ToastItem({ t }) {
  const base = "px-4 py-2 rounded-md shadow-md text-sm mb-2";
  const variantStyles = {
    default: "bg-white text-gray-900 border",
    success: "bg-green-50 text-green-800 border border-green-200",
    error: "bg-red-50 text-red-800 border border-red-200",
    info: "bg-blue-50 text-blue-800 border border-blue-200",
  };

  return (
    <div
      className={`${base} ${variantStyles[t.variant] || variantStyles.default}`}
      role="status"
    >
      {t.title && <div className="font-medium">{t.title}</div>}
      {t.description && (
        <div className="text-xs opacity-90">{t.description}</div>
      )}
    </div>
  );
}

export function Toaster() {
  const { toasts } = useToast();

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      style={{
        position: "fixed",
        right: 20,
        bottom: 20,
        zIndex: 9999,
        width: 320,
      }}
    >
      {toasts.map((t) => (
        <ToastItem key={t.id} t={t} />
      ))}
    </div>,
    document.body,
  );
}

export default Toaster;
