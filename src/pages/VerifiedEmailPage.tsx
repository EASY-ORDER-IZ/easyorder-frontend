import { Button } from '@/components/ui/button/button';
import React from 'react';
import { useNavigate } from 'react-router';

export default function VerifiedEmailPage(): JSX.Element {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#faf9f7] p-6">
      <div className="relative w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg">
        <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">✕</button>

        <div className="mt-4 flex flex-col items-center gap-6">
          <div className="flex h-40 w-40 items-center justify-center">
            <svg
              className="h-40 w-40"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="60"
                cy="60"
                r="46"
                stroke="#1EC276"
                strokeWidth="4"
                strokeLinecap="round"
                className="circle-path"
              />

              <path
                d="M42 62 L55 74 L78 50"
                stroke="#1EC276"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                className="check-path"
              />
            </svg>
          </div>

          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800">Email Verified!</h2>
            <p className="mt-2 text-sm text-gray-500">Your email has been verified successfully.</p>
          </div>
          <Button
            title="Continue"
            className="mt-6 w-full rounded-full py-3 text-sm font-medium text-white shadow-lg hover:opacity-95"
            onClick={() => handleClick()}
          />
        </div>

        <img
          src="/mnt/data/fe26156c-8a63-48ec-81cf-8d00bf624025.png"
          alt="decor"
          className="hidden"
        />

        <style jsx>{`
          .circle-path {
            stroke-dasharray: 289;
            stroke-dashoffset: 289;
            animation: drawCircle 600ms cubic-bezier(0.2, 0.9, 0.2, 1) forwards;
          }

          .check-path {
            stroke-dasharray: 80;
            stroke-dashoffset: 80;
            animation: drawCheck 350ms 450ms cubic-bezier(0.2, 0.9, 0.2, 1) forwards;
          }

          @keyframes drawCircle {
            to {
              stroke-dashoffset: 0;
            }
          }

          @keyframes drawCheck {
            to {
              stroke-dashoffset: 0;
            }
          }

          /* subtle bounce once drawn */
          .circle-path,
          .check-path {
            transform-origin: 50% 50%;
          }

          .circle-path {
            animation-name: drawCircle, pop;
            animation-duration: 600ms, 300ms;
            animation-timing-function: cubic-bezier(0.2, 0.9, 0.2, 1), ease-out;
            animation-fill-mode: forwards;
            animation-delay: 0ms, 700ms;
          }

          @keyframes pop {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.06);
            }
            100% {
              transform: scale(1);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
