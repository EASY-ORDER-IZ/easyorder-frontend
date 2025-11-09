import React from 'react';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';

const InputOTPPattern = ({ value, onChange }: { value: string; onChange: (v: string) => void }) => {
  return (
    <InputOTP value={value} onChange={onChange} maxLength={6} className="flex justify-center">
      <InputOTPGroup className="flex gap-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <InputOTPSlot
            key={i}
            index={i}
            className="h-14 w-14 rounded-md border border-gray-300 text-center text-lg font-semibold focus:border-[var(--color-primary-main)]"
          />
        ))}
      </InputOTPGroup>
    </InputOTP>
  );
};

export default InputOTPPattern;
