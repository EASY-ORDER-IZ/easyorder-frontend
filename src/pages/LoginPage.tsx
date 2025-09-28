import { Button } from '@/components/ui/button/button';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate('/home')}>Register</Button>
    </div>
  );
};

export default LoginPage;
