import { XIcon } from 'lucide-react';
import { useState } from 'react';
import Modal from './Modal';
import SignUpPage from '@/pages/SignUpPage';

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);

  if (!visible) return null;

  return (
    <div className="bg-accent-primary flex w-full items-center justify-between px-3 py-2">
      <div></div>

      <div className="flex items-center justify-center gap-2">
        <span className="header-text">Sign up and get 20% off your first order</span>
        <Modal
          open={open}
          setOpen={setOpen}
          page={<SignUpPage />}
          trigger={
            <span
              onClick={() => setOpen(true)}
              className="link-text !text-background cursor-pointer"
            >
              Join Now
            </span>
          }
        />
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
