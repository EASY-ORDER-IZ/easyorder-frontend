import { redirect } from 'react-router-dom';

const Auth = () => {
  const user = {
    name: 'John Doe',
    email: 'john@example',
  };
  if (!user) {
    return redirect('/signup');
  }
  return user;
};

export default Auth;
