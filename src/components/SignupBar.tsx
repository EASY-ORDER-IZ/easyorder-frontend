import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cross from '../assets/images/cross.svg';

const SignupBar = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="w-full bg-button-bg text-button-text sm:text-sm text-xs py-2 px-4 flex justify-center items-center relative">
      <span className="text-text-50">
        Sign up and get 20% off your first order.{' '}
        <Link to="/signin" className="underline font-medium hover:text-gray-200 transition">
          Sign Up Now
        </Link>
      </span>
      <img
        src={cross}
        alt="Close"
        onClick={() => setVisible(false)}
        className="absolute sm:right-22 right-7 text-white hover:opacity-70 transition cursor-pointer"
      />
    </div>
  );
};

export default SignupBar;
