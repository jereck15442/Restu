export default function LoadingSpinner({ size = 40, className = '' }) {
  return (
    <div className={`spinner ${className}`} style={{ width: size, height: size, borderWidth: size / 13 }} />
  );
}