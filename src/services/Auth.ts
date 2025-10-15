import { redirect } from 'react-router-dom';

interface User {
  email: string;
  password: string;
}

const Auth = ({ email, password }: User) => {
  const user = {
    email: email,
    password: password,
  };
  if (!user) {
    return redirect('/signup');
  }
  return user;
};

export default Auth;
