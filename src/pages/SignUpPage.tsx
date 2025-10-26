import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import signuppic from '../assets/images/signuppic.png';
import Form from '@/components/SignUpPageComponents/Form';
import { Input } from '@/components/ui/input';
import { UserRound } from 'lucide-react';
const SignUpPage = () => {
  return (
    <div className="flex h-full w-full gap-2 p-1">
      <div className="hidden lg:flex">
        <img src={signuppic} className="object-cover" />
      </div>

      <div className="flex w-full flex-col p-2 lg:max-w-[50%]">
        <div className="flex w-full flex-col gap-2">
          <span className="text-text-primary items-center text-center align-middle text-lg leading-8 font-medium">
            Join the world of FirstChance
          </span>
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
    </div>
  );
};

export default SignUpPage;
