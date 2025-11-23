import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

interface OTPTimerProps {
  initialMinutes?: number;
  onExpire?: () => void;
}

const OTPTimer: React.FC<OTPTimerProps> = ({ initialMinutes = 15, onExpire }) => {
  const [time, setTime] = useState(initialMinutes * 60);
  const [searchParams] = useSearchParams();

  const email = searchParams.get('email') ?? '';

  const handleResend = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/v1/auth/resend-otp',
        { email },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      console.log('OTP resent successfully', response.data);
    } catch (error) {
      console.error('Resend OTP failed:', error);
    }
  };

  useEffect(() => {
    if (time <= 0) {
      onExpire?.();
      return;
    }

    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time, onExpire]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="text-center text-sm text-[var(--color-primary)]">
      <span className="link-text cursor-pointer" onClick={handleResend}>
        resend code in
      </span>
      {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
    </div>
  );
};

export default OTPTimer;
