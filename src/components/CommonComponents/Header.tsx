import { XIcon } from 'lucide-react';
import { useState } from 'react';
import Modal from './Modal';
import SignUpPage from '@/pages/SignUpPage';

interface HeaderProps {
  setIsModalOpen: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setIsModalOpen }) => {
  const [visible, setVisible] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);

  if (!visible) return null;

  return (
    <div className="bg-accent-primary flex w-full items-center justify-between px-3 py-2">
      <div></div>
      <div className="flex items-center justify-center gap-2">
        <span className="header-text">Sign up and get 20% off your first order</span>
        <Modal
          open={open}
          setOpen={(val: boolean) => {
            setOpen(val);
            setIsModalOpen(val);
          }}
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
