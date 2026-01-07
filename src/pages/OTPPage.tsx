import React, { useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import InputOTPPattern from '@/components/SignUpPageComponents/OTP';
import { Button } from '@/components/ui/button/button';
// import { OTP_img } from '@/assets/icons';
import { Link } from 'react-router-dom';
import OTPTimer from '@/components/SignUpPageComponents/OTPTimer';
import axios from 'axios';

const OTPPage: React.FC = () => {
  const [otp, setOtp] = useState('');
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email') ?? 'example@email.com';
  const [touched, setTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const hasSix = otp.length === 6;
  const hasError = useMemo(() => submitted && hasSix, [submitted, hasSix]);
  const navigate = useNavigate();

  const handleExpire = () => {
    alert('OTP Expired');
  };

  const handleConfirm = async () => {
    const payload = {
      email,
      otpCode: otp,
    };

    try {
      const response = await axios.post('http://localhost:3000/api/v1/auth/verify-otp', payload);
      console.log('success:', response.data);
      navigate('verified-email');
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
    }
  };

  return (
    <div className="flex w-full items-stretch gap-6 p-4 lg:p-6">
      <div className="hidden w-[360px] shrink-0 lg:block">
        <div className="relative h-[520px] w-full overflow-hidden rounded-2xl">
          <img
            // src={OTP_img}
            alt="OTP Verification"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute bottom-4 left-4">
            <div className="rounded-md bg-black/30 px-3 py-1 text-sm font-semibold tracking-wide text-white">
              FIRSTCHANCE
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[440px] flex-col justify-center">
        <div className="space-y-2 text-center">
          <h3 className="text-[28px] leading-8 font-semibold text-gray-900">Verify your email</h3>
          <p className="text-gray-600">
            We sent a code to <strong className="font-semibold">{email}</strong>{' '}
            <Link to="#" className="font-medium text-[var(--color-primary-main)] hover:underline">
              Change Email
            </Link>
          </p>
        </div>

        <div className="mt-6">
          <InputOTPPattern
            value={otp}
            onChange={(v: string) => {
              if (!touched) setTouched(true);
              setSubmitted(false);
              setOtp(v);
            }}
          />
          {hasError && (
            <p className="mt-2 rounded-md border border-red-600 p-2 text-center text-sm font-medium text-red-600">
              Incorrect OTP. Please try again.
            </p>
          )}
        </div>

        <div className="mt-6 space-y-4">
          <Button
            className="w-full"
            disabled={!hasSix || hasError}
            aria-disabled={!hasSix || hasError}
            onClick={handleConfirm}
            title="Confirm"
          >
            Confirm
          </Button>

          <div className="text-center text-sm text-gray-600">
            Didn’t receive the code?{' '}
            <button
              type="button"
              className="font-medium text-[var(--color-primary-main)] hover:underline"
              onClick={() => {
                setSubmitted(false);
              }}
            >
              <OTPTimer initialMinutes={15} onExpire={handleExpire} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPPage;
