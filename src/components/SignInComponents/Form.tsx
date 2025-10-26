'use client';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import { Chromium, Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { Field, FieldGroup } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import formSchema from '@/validation/formSchema';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button/button';
import { useAuthStore } from '@/store/authStore';
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '../ui/separator';

export function FormComponent() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const email = form.watch('email');
  const password = form.watch('password');
  const isDisabled = !email || !password;

  function onSubmit(data: z.infer<typeof formSchema>) {
    const mockUser = { id: 1, email: 'tesst@example.com', password: 'Moh@12345' };
    if (data.email === mockUser.email && data.password === mockUser.password) {
      login(mockUser);

      navigate('/');
      console.log(data);
    } else {
      toast.error('Invalid credentials');
    }
  }

  return (
    <div className="bg-background flex w-full flex-col gap-3 p-5 lg:max-w-[50%]">
      <div className="flex w-full justify-center">
        <span className="text-text-primary text-lg leading-7 font-medium">
          Log In to Your Account
        </span>
      </div>
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="phone">Phone Number</TabsTrigger>
        </TabsList>
        <TabsContent value={'email'}></TabsContent>
      </Tabs>

      <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup className="flex flex-col">
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <div>
                  <Input
                    prefixIcon={<Mail size={18} className="text-text-primary" />}
                    label="Email"
                    required={true}
                    {...field}
                    id="form-rhf-demo-email"
                    aria-invalid={fieldState.invalid}
                    type="email"
                    placeholder="canan@example.com"
                    autoComplete="off"
                    error="please Enter you email correctly "
                  />
                </div>
              </Field>
            )}
          />
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <div className="relative flex w-full items-center">
                  <Input
                    suffixIcon={
                      showPassword ? (
                        <EyeOff
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="text-text-primary cursor-pointer"
                          size={18}
                        />
                      ) : (
                        <Eye
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="text-text-primary cursor-pointer"
                          size={18}
                        />
                      )
                    }
                    prefixIcon={<Lock size={18} className="text-text-primary" />}
                    label="Password"
                    link="/resetpassword"
                    type={showPassword ? 'text' : 'password'}
                    {...field}
                    id="form-rhf-demo-password"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your password"
                    autoComplete="off"
                    linklabel="Forgot password?"
                    required={true}
                    error="Enter your pass"
                  />
                </div>
              </Field>
            )}
          />
        </FieldGroup>
      </form>

      <Field id="submit" orientation="horizontal">
        <div className="flex w-full flex-col gap-1">
          <Button
            disabled={isDisabled}
            title="Sign In"
            type="submit"
            variant="primary"
            form="form-rhf-demo"
          />
          <div className="flex items-center justify-center gap-2">
            <Separator />
            <div className="text-text-disabled flex w-full items-center justify-center text-sm">
              or sign in with
            </div>
            <Separator />
          </div>{' '}
          <Button
            prefixIcon={<Chromium size={18} className="text-accent-primary" />}
            title="Sign in With Google"
            type="submit"
            variant="secondary"
            form="form-rhf-demo"
          />
          <Field className="flex justify-center gap-1" id="signup" orientation="horizontal">
            <span className="text-text-secondary leading-leading-lg text-sm font-light">
              Don't have an account?
            </span>
            <Link to={'/sign-up'} className="link-text">
              Sign up
            </Link>
          </Field>
        </div>
      </Field>
    </div>
  );
}
