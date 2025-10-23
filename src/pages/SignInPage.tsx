import SignInPic from '../components/CommonComponents/SignInPic';
import { FormComponent } from '@/components/SignInComponents/Form';

const SignInPage = () => {
  return (
    <div className="bg-background custom-shadow flex w-full justify-between p-4">
      <SignInPic />
      <FormComponent />
    </div>
  );
};

export default SignInPage;
