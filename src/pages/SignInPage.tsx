import SignInPic from '../components/SignInComponents/SignInPic';
import { FormComponent } from '@/components/SignInComponents/Form';
import Title from '@/components/SignInComponents/Title';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SignInPage = () => {
  return (
    <div className="flex w-full justify-between gap-2">
      <SignInPic />
      <div className="flex w-full flex-col gap-2">
        <Title />
        <Tabs defaultValue="email">
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
