import { XIcon } from 'lucide-react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Header = () => {
  const [visible, setVisible] = useState<boolean>(true);
  const [, setSearchParams] = useSearchParams();

  const switchDialog = (target: 'sign-in' | 'sign-up' | 'forget-password' | 'email-verfiy') => {
    setSearchParams({ auth: target });
  };
  if (!visible) return null;

  return (
    <div className="bg-accent-primary flex w-full items-center justify-between px-3 py-2">
      <div></div>
      <div className="flex items-center justify-center gap-2">
        <span className="header-text">Sign up and get 20% off your first order</span>

        <span
          onClick={() => switchDialog('sign-up')}
          className="link-text !text-background cursor-pointer"
        >
          Join Now
        </span>
      </div>
      <div>
        <XIcon
          onClick={() => setVisible(false)}
          size={18}
          className="text-background cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
