import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button/button';
import { CheckCircle2 } from 'lucide-react';

const Verified: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center px-6 py-10 text-center">
      <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full border-[6px] border-green-500">
        <CheckCircle2 size={72} className="text-green-500" />
      </div>

      <h2 className="text-2xl font-semibold text-gray-900">Email Verified!</h2>
      <p className="mt-2 text-gray-600">Your email has been verified successfully.</p>

      <div className="mt-8 w-full max-w-xs">
        <Button
          className="w-full rounded-full bg-[#D24560] hover:bg-[#c23c56]"
          onClick={() => navigate('/')}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Verified;
