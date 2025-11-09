import SignInPic from '../components/SignInComponents/SignInPic';
import { FormComponent } from '@/components/SignInComponents/Form';
import Title from '@/components/SignInComponents/Title';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SignInPage = () => {
  return (
    <div className="flex h-full w-full justify-center gap-4 p-2 lg:justify-between">
      <div className="hidden lg:flex lg:w-full">
        <SignInPic />
      </div>

      <div className="flex w-full flex-col gap-4 p-2 lg:max-w-[50%]">
        <Title title="Sign In" desc=" Enter your credentials to access your account" />
        <Tabs defaultValue="email" className="w-full">
          <TabsList className="h-10">
            <TabsTrigger value="email" className="h-8">
              Email
            </TabsTrigger>
            <TabsTrigger value="phone" className="h-8">
              Phone
            </TabsTrigger>
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
