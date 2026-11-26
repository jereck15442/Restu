import { useState } from 'react';

export default function Input({ label, type = 'text', placeholder, value, onChange, error, ...props }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="form-group">
      {label && (
        <label className="form-label">{label}</label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`form-input ${error || isFocused ? 'focus-border' : ''} ${error ? 'error' : ''}`}
        {...props}
      />
      {error && <span className="form-error">{error}</span>}
    </div>
  );
}