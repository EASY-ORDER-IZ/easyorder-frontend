import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import signuppic from '../assets/images/signuppic.png';
import Form from '@/components/SignUpPageComponents/Form';
import { Input } from '@/components/ui/input';
import { UserRound } from 'lucide-react';
import Title from '@/components/SignInComponents/Title';
const SignUpPage = () => {
  return (
    <div className="flex w-full justify-center gap-2 p-1 lg:h-[100vh] lg:justify-between">
      <div className="hidden h-full w-full lg:flex">
        <img src={signuppic} className="object-fit" />
      </div>

      <div className="flex w-full flex-col p-2 lg:max-w-[40%]">
        <div className="flex w-full flex-col gap-6">
          <Title title="Sign Up" desc="Enter your credentials to create your account" />
          <Input
            prefixIcon={<UserRound />}
            label="Username"
            required
            placeholder="Enter Your username"
          />

          <Tabs defaultValue="email">
            <TabsList>
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="phone">Phone Number</TabsTrigger>
            </TabsList>
            <TabsContent value={'email'}>
              <Form type="email" />
            </TabsContent>
            <TabsContent value="phone" className="w-full">
              <Form type="phone" />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default SignUpPage;
