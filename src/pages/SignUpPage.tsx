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
    <div className="flex justify-center gap-2 p-1 lg:w-full lg:justify-between">
      <div className="hidden h-full w-full lg:flex">
        <img src={signuppic} className="object-cover" />
      </div>

      <div className="flex h-170 w-full flex-col p-2 lg:max-w-[50%]">
        <div className="flex w-full flex-col gap-6">
          <Title title="Sign Up" desc="Enter your credentials to create your account" />
          <Input
            prefixIcon={<UserRound size={18} />}
            label="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Your username"
            className="h-3"
          />

          <Tabs defaultValue="email">
            <TabsList className="h-10">
              <TabsTrigger value="email" className="h-8">
                Email
              </TabsTrigger>
              <TabsTrigger value="phone" className="h-8">
                Phone Number
              </TabsTrigger>
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
