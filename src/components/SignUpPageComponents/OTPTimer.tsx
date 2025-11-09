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

  const email = searchParams.get('email') ?? 'example@email.com';

  const handleResend = () => {
    try {
      const response = axios.post(
        'http://localhost:3000/api-docs/#/Auth/post_api_v1_auth_resend_otp',
        email,
      );
      console.log('success', response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (time <= 0) {
      if (onExpire) onExpire();
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
