import SignInPic from '../components/SignInComponents/SignInPic';
import { FormComponent } from '@/components/SignInComponents/Form';

const SignInPage = () => {
  return (
    <div className="flex w-full justify-between gap-2">
      <SignInPic />
      <FormComponent />
      <div className=""></div>
    </div>
  );
};

export default SignInPage;
