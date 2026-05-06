export function Spinner({ className = "w-6 h-6" }) {
  return (
    <div className={`inline-block ${className}`}>
      <div className="animate-spin rounded-full h-full w-full border-4 border-gray-300 border-t-primary"></div>
    </div>
  );
}
