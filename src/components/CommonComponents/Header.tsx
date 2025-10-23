import { XIcon } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router';

const Header = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="bg-accent-primary flex w-full items-center justify-between py-2">
      <div className=""></div>
      <div className="flex items-center gap-2">
        <span className="header-text">Sign up and get 20% off to your first order</span>
        <NavLink className="link-text !text-background" to={'/signup'}>
          Join Now
        </NavLink>
      </div>
      <div>
        <XIcon
          onClick={() => {
            setVisible(false);
          }}
          size={18}
          className="text-background"
        />
      </div>
    </div>
  );
};

export default Header;
