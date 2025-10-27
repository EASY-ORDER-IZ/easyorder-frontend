'use client';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import { Eye, EyeOff, Lock, Mail, ChevronDown } from 'lucide-react';
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import formSchema from '@/validation/formSchema';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button/button';
import { useAuthStore } from '@/store/authStore';
import { toast } from 'sonner';
import { Separator } from '../ui/separator';
import Google from '@/assets/svg/Google';

interface FormProps {
  type: 'email' | 'phone';
}

export function FormComponent({ type }: FormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      phone: '',
      password: '',
    },
  });

  const email = form.watch('email');
  const phone = form.watch('phone');
  const password = form.watch('password');

  const isDisabled = type === 'email' ? !email || !password : !phone || !password;

  function onSubmit(data: z.infer<typeof formSchema>) {
    const mockUser = {
      id: 1,
      email: 'tesst@example.com',
      phone: '+972123456789',
      password: 'Moh@12345',
    };

    if (
      (type === 'email' ? data.email : data.phone) ===
        (type === 'email' ? mockUser.email : mockUser.phone) &&
      data.password === mockUser.password
    ) {
      login(mockUser);
      navigate('/');
      console.log(data);
    } else {
      toast.error('Invalid credentials');
    }
  }

  return (
    <div className="flex w-full flex-col gap-3 p-5">
      <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex w-full flex-col gap-3">
          {type === 'email' ? (
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    prefixIcon={<Mail size={18} />}
                    label="Email"
                    placeholder="canan@example.com"
                    required
                    {...field}
                    error={fieldState.error?.message}
                  />
                </Field>
              )}
            />
          ) : (
            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    prefixIcon={<ChevronDown size={18} />}
                    label="Phone"
                    placeholder="+972"
                    required
                    {...field}
                    error={fieldState.error?.message}
                  />
                </Field>
              )}
            />
          )}

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
                          className="cursor-pointer"
                          size={18}
                        />
                      ) : (
                        <Eye
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="cursor-pointer"
                          size={18}
                        />
                      )
                    }
                    prefixIcon={<Lock size={18} />}
                    label="Password"
                    link="/resetpassword"
                    type={showPassword ? 'text' : 'password'}
                    {...field}
                    placeholder="Enter your password"
                    linklabel="Forgot password?"
                    required
                    error={fieldState.error?.message}
                  />
                </div>
              </Field>
            )}
          />
        </div>
      </form>

      <Field id="submit" orientation="horizontal">
        <div className="flex w-full flex-col gap-4">
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
          </div>
          <Button
            prefixIcon={<Google />}
            title="Google"
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
