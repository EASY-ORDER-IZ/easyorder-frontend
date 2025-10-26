import SignInPic from '../components/SignInComponents/SignInPic';
import { FormComponent } from '@/components/SignInComponents/Form';

const SignInPage = () => {
  return (
    <div className="flex w-full gap-2">
      <SignInPic />
      <FormComponent />
    </div>
  );
};

export default SignInPage;
