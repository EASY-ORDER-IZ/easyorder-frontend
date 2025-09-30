import { Button } from '@/components/ui/button/button';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-20 bg-gray-50 justify-between items-center p-4 ">
      <h1>Easy Order Shop</h1>
      <div className="flex gap-4 bg-white px-4 py-2 rounded-full w-50">
        <NavLink
          to="about"
          className={({ isActive }) =>
            `px-4 py-2 rounded-full hover:bg-gray-100 w-20 ${isActive ? 'bg-gray-200 text-red-600' : ''}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="help"
          className={({ isActive }) =>
            `px-4 py-2 rounded-full hover:bg-gray-100 w-20 ${isActive ? 'bg-gray-200 text-red-600' : ''}`
          }
        >
          Help
        </NavLink>
      </div>
      <div className="flex gap-4 px-4 py-2  w-50">
        <Button onClick={() => navigate('signin')}>Sign In</Button>
        <Button onClick={() => navigate('signup')}>Sign Up</Button>
      </div>
    </div>
  );
};

export default Navbar;
