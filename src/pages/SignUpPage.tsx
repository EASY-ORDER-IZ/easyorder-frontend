import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import signuppic from '../assets/images/signuppic.png';
import Form from '@/components/SignUpPageComponents/Form';
import { Input } from '@/components/ui/input';
import { UserRound } from 'lucide-react';
import Title from '@/components/SignInComponents/Title';
import { useState } from 'react';
const SignUpPage = () => {
  const [username, setUsername] = useState('');

  return (
    <div className="flex w-full justify-center gap-2 p-1 lg:justify-between">
      <div className="hidden h-full w-full lg:flex">
        <img src={signuppic} className="object-cover" />
      </div>

      <div className="custom-scroll flex h-170 w-full flex-col overflow-y-auto p-2 lg:max-w-[50%]">
        <div className="flex w-full flex-col gap-6">
          <Title title="Sign Up" desc="Enter your credentials to create your account" />
          <Input
            prefixIcon={<UserRound />}
            label="Username"
            required
            placeholder="Enter Your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Tabs defaultValue="email">
            <TabsList>
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="phone">Phone Number</TabsTrigger>
            </TabsList>
            <TabsContent value={'email'}>
              <Form type="email" username={username} />
            </TabsContent>
            <TabsContent value="phone" className="w-full">
              <Form type="phone" username={username} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default SignUpPage;
