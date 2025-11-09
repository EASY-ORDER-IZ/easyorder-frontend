import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import InputOTPPattern from '@/components/SignUpPageComponents/OTP';
import { Button } from '@/components/ui/button/button';
import { OTP_img } from '@/assets/icons';
import { Link } from 'react-router-dom';

const OTPPage = () => {
  const [otp, setOtp] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const email = searchParams.get('email');

  const handleConfirm = () => {
    // For now, just simulate success
    console.log('Entered OTP:', otp);
    navigate('/success'); // change later when backend is ready
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center gap-8 p-4 lg:justify-between lg:p-8">
      <div className="hidden h-full w-full max-w-2xl lg:flex">
        <img
          src={OTP_img}
          alt="OTP Verification"
          className="h-full w-full rounded-2xl object-cover"
        />
      </div>

      <div className="flex w-full max-w-md flex-col items-center justify-center space-y-8">
        <div className="w-full space-y-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900">Verify your email</h3>
          <p className="text-gray-600">
            We sent a code to <strong>{email}</strong>{' '}
            <Link to="#" className="font-medium text-[var(--color-primary-main)] hover:underline">
              Change Email
            </Link>
          </p>
        </div>

        <div className="w-full">
          <InputOTPPattern value={otp} onChange={setOtp} />
        </div>

        {otp.length === 6 && (
          <div className="text-center text-sm text-green-600">Ready to confirm.</div>
        )}

        <div className="w-full space-y-4">
          <Button className="w-full" disabled={otp.length !== 6} onClick={handleConfirm}>
            Confirm
          </Button>

          <div className="text-center text-sm text-gray-600">
            Didn’t receive the code?
            <span className="cursor-pointer font-medium text-[var(--color-primary-main)] hover:underline">
              resend code in 1:43
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPPage;
