import { FormComponent } from '@/components/SignInComponents/Form';
import { Button } from '@/components/ui/button/button';
import { Spinner } from '@/components/ui/spinner';
import { ChevronRight, Lock } from 'lucide-react';

const SignInPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <FormComponent />
      <Button variant="primary">
        <Lock />
        <span className="button-text">Welcome</span>
        <ChevronRight />
      </Button>
      <Button variant="secondary">
        <Spinner className="size-6" />
        <span className="button-text">Loading ...</span>
        <ChevronRight />
      </Button>
    </div>
  );
};

export default SignInPage;
