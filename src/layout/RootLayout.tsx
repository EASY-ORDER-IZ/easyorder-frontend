import AuthDialogController from '@/components/AuthDialogController';
import { useState } from 'react';
import { Outlet, useMatches } from 'react-router-dom';
import Navbar from '../components/CommonComponents/Navbar';
import SignupBar from '../components/SignupBar';
import { cn } from '@/lib/utils';

const RootLayout: React.FC = () => {
  const [isModalOpen] = useState(false);

  const matches = useMatches();
  const leafMatch = matches[matches.length - 1];
  const noPadding = Boolean(leafMatch?.handle?.noPadding);

  return (
    <div className="flex min-h-screen flex-col gap-8">
      <SignupBar />

      <main className={cn('flex w-full flex-1 flex-col', noPadding ? 'p-0' : 'px-14')}>
        <Navbar isModalOpen={isModalOpen} />
        <Outlet />
      </main>

      <AuthDialogController />
    </div>
  );
};

export default RootLayout;
