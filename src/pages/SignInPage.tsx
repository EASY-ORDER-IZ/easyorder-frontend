import { FormComponent } from '@/components/SignInComponents/Form';
import { Button } from '@/components/ui/button/button';
import { Spinner } from '@/components/ui/spinner';
import { ChevronRight, Lock } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
      <Tabs className="flex items-center" defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Selected Tap</TabsTrigger>
          <TabsTrigger value="password">Tap</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Make changes to your account here.</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default SignInPage;
