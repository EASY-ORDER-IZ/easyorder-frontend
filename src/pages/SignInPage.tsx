import SignInPic from '../components/CommonComponents/SignInPic';
import { FormComponent } from '@/components/SignInComponents/Form';

const SignInPage = () => {
  return (
    <div className="flex w-full justify-center gap-4 lg:justify-between">
      <SignInPic />
      <FormComponent />
    </div>
  );
};

export default SignInPage;
