import Header from '@/components/CommonComponents/Header';
import NavbarV2 from '@/components/CommonComponents/NavbarV2';

const RootLayout = () => {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <NavbarV2 />
    </div>
  );
};

export default RootLayout;
