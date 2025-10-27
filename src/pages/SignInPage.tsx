import SignInPic from '../components/SignInComponents/SignInPic';
import { FormComponent } from '@/components/SignInComponents/Form';
import Title from '@/components/SignInComponents/Title';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SignInPage = () => {
  return (
    <div className="flex h-full w-full justify-center gap-2 p-2 lg:justify-between">
      <div className="hidden lg:flex lg:h-full lg:w-full">
        <SignInPic />
      </div>

      <div className="flex w-full flex-col gap-4 p-2 lg:max-w-[50%]">
        <Title title="Sign In" desc=" Enter your credentials to access your account" />
        <Tabs defaultValue="email" className="w-full">
          <TabsList>
            <TabsTrigger value="email">Email</TabsTrigger>
            <TabsTrigger value="phone">Phone Number</TabsTrigger>
          </TabsList>
          <TabsContent value="email">
            <FormComponent type="email" />
          </TabsContent>
          <TabsContent value="phone">
            <FormComponent type="phone" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SignInPage;
