import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface PhoneInputFieldProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  label?: string;
}

const PhoneInputField: React.FC<PhoneInputFieldProps> = ({ value, onChange, error, label }) => {
  return (
    <div className="w-full">
      {label && <label className="text-text-600 text-list">{label}</label>}
      <PhoneInput
        country={'ps'}
        value={value}
        onChange={onChange}
        inputClass="!w-full !h-11 !text-base !rounded-md !border !border-gray-300 focus:!border-[var(--color-primary-main)]"
        buttonClass="!border !border-gray-300 !bg-white"
        dropdownClass="!text-base"
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default PhoneInputField;
