import SignInPic from '@/assets/svg/SignInPic';
import { FormComponent } from '@/components/SignInComponents/Form';

const SignInPage = () => {
  return (
    <div className="bg-background custom-shadow flex w-full items-center justify-between p-4">
      <SignInPic />
      <FormComponent />
    </div>
  );
};

export default SignInPage;
