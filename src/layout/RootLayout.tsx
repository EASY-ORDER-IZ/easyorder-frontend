import { Outlet } from 'react-router-dom';
import Navbar from '../components/CommonComponents/Navbar';
import SignupBar from '../components/SignupBar';
// import InputComponent from '@/components/CommonComponents/Input';
// import { EyeIcon, LockKeyhole } from 'lucide-react';
// import { Button } from '@/components/ui/button/button';

const RootLayout = () => {
  return (
    <div className="">
      <SignupBar />
      <Navbar />
      {/* <div className="placeholder:text-text-200 placeholder:text-list mt-100 flex w-[600px] flex-col justify-center gap-6 p-10 placeholder:leading-[100%] placeholder:font-medium">
        <InputComponent
        
          leadingIcon={<LockKeyhole className="text-text-200 text-h4" />}
          trailingIcon={<EyeIcon className="text-text-200 text-h4 cursor-pointer" />}
          type="password"
          placeholder="Password"
        />
        <Button variant="primary" size="lg">
          Placeholder
        </Button>
        
      </div> */}

      <Outlet />
    </div>
  );
};

export default RootLayout;
