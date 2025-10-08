import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="px-5 pt-5 pb-15 lg:px-15">
      <Outlet />
    </div>
  );
};

export default RootLayout;
