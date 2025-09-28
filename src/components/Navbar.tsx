import React from 'react';
import { Button } from '@/components/ui/button/button';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-20 bg-gray-50 justify-between items-center p-4 ">
      <h1>Easy Order Shop</h1>
      <div className="flex gap-4 bg-white px-4 py-2 rounded-full w-50">
        <Link to="about" className="px-4 py-2 rounded-full hover:bg-gray-100 w-20">
          About
        </Link>
        <Link to="help" className=" px-4 py-2 rounded-full hover:bg-gray-100 w-20">
          Help
        </Link>
      </div>
      <div className="flex gap-4 px-4 py-2  w-50">
        <Button onClick={() => navigate('signin')}>Sign In</Button>
        <Button onClick={() => navigate('signup')}>Sign Up</Button>
      </div>
    </div>
  );
};

export default Navbar;
