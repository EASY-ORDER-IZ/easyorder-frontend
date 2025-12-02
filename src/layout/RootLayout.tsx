import AuthDialogController from '@/components/AuthDialogController';

import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/CommonComponents/Navbar';
import SignupBar from '../components/SignupBar';

const RootLayout: React.FC = () => {
  const [isModalOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <SignupBar />
      <Navbar isModalOpen={isModalOpen} />
      <Outlet />
      <AuthDialogController />
    </div>
  );
};

export default RootLayout;
