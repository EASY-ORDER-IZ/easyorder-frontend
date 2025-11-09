import { useSearchParams } from 'react-router-dom';
import Modal from './CommonComponents/Modal';
import SignInPage from '@/pages/SignInPage';
import SignUpPage from '@/pages/SignUpPage';
import ForgotPasswordPage from '@/pages/ForgotPasswordPage';
import ResetPassPage from '@/pages/ResetPassPage';
import SetNewPass from '@/pages/SetNewPass';
import OTPPage from '@/pages/OTPPage';
import { Verified } from 'lucide-react';

const AuthDialogController = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const auth = searchParams.get('auth');

  const closeDialog = () => {
    searchParams.delete('auth');
    setSearchParams(searchParams);
  };

  if (!auth) return null;
  const page =
    auth === 'sign-in' ? (
      <SignInPage
      // toSignUp={() => switchDialog('sign-up')}
      // toForgot={() => switchDialog('forget-password')}
      // onClose={closeDialog}
      />
    ) : auth === 'sign-up' ? (
      <SignUpPage
      //    toSignIn={() => switchDialog('sign-in')} onClose={closeDialog}
      />
    ) : auth === 'forget-password' ? (
      <ForgotPasswordPage
      //   toSignIn={() => switchDialog('sign-in')} onClose={closeDialog}
      />
    ) : auth === 'reset_pass' ? (
      <ResetPassPage
      //   toSignIn={() => switchDialog('sign-in')} onClose={closeDialog}
      />
    ) : auth === 'set-new-password' ? (
      <SetNewPass
      //   toSignIn={() => switchDialog('sign-in')} onClose={closeDialog}
      />
    ) : auth === 'email-verify' ? (
      <OTPPage />
    ) : auth === 'verified' ? (
      <Verified />
    ) : null;

  return <Modal open={!!auth} setOpen={(v) => !v && closeDialog()} page={page} />;
};
export default AuthDialogController;
