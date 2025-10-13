import { useState } from 'react';
import { Link } from 'react-router-dom';
import cross from '../assets/images/cross.svg';

const SignupBar = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="bg-button-bg text-button-text relative flex w-full items-center justify-center px-4 py-2 text-xs sm:text-sm">
      <span className="text-text-50">
        Sign up and get 20% off your first order.{' '}
        <Link to="/signin" className="font-medium underline transition hover:text-gray-200">
          Sign Up Now
        </Link>
      </span>
      <img
        src={cross}
        alt="Close"
        onClick={() => setVisible(false)}
        className="absolute right-7 cursor-pointer text-white transition hover:opacity-70 sm:right-22"
      />
    </div>
  );
};

export default SignupBar;
