import AuthDialogController from '@/components/AuthDialogController';
import Header from '@/components/CommonComponents/Header';
import NavbarV2 from '@/components/CommonComponents/NavbarV2';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/CommonComponents/Navbar';
import SignupBar from '../components/SignupBar';

const RootLayout: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <SignupBar />
      <Navbar />
      <Outlet />
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-[2000px] flex-col">
        <Header setIsModalOpen={setIsModalOpen} />
        <NavbarV2 isModalOpen={isModalOpen} />
        <Outlet />
        <AuthDialogController />
      </div>
    </div>
  );
};

export default RootLayout;
