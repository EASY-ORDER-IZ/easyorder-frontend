import SignInPic from '../components/SignInComponents/SignInPic';
import Form from '../components/SetNewPassComponent/Form';

const ResetPass = () => {
  return (
    <div className="flex h-full w-full justify-center gap-4 overflow-x-hidden p-2 lg:justify-between">
      <div className="hidden lg:flex lg:w-full">
        <SignInPic />
      </div>
      <Form />
    </div>
  );
};

export default ResetPass;
