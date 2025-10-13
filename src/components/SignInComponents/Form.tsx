'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';

import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import formSchema from '@/validation/formSchema';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button/button';
import { useAuthStore } from '@/store/authStore';
import { toast } from 'sonner';

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

  function onSubmit(data: z.infer<typeof formSchema>) {
    const mockUser = { id: 1, email: 'tesst@example.com', password: 'Moh@12345' };
    if (data.email === mockUser.email && data.password === mockUser.password) {
      login(mockUser);
      navigate('/home');
      console.log(data);
    } else {
      toast.error('Invalid credentials');
    }
  }

  return (
    <div className="flex min-w-105 flex-col gap-8">
      <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-rhf-demo-email">
                  Email<span className="text-status-warning">*</span>
                </FieldLabel>
                <div className="relative flex w-full items-center">
                  <div className="absolute inset-y-0 left-3 flex items-center">
                    <Mail className="text-text-200 h-6 w-6" />
                  </div>
                  <Input
                    variant="form"
                    {...field}
                    id="form-rhf-demo-email"
                    aria-invalid={fieldState.invalid}
                    type="email"
                    placeholder="canan@example.com"
                    autoComplete="off"
                    className="border-text-main placeholder:text-text-200 aria-[invalid=true]:border-status-warning aria-[invalid=true]:focus:border-status-warning border pr-10 pl-10 transition-all duration-300 ease-in-out placeholder:text-lg placeholder:leading-[100%] placeholder:font-medium"
                  />
                </div>

                {fieldState.invalid && (
                  <FieldError
                    className="text-status-warning peer-aria-invalid:text-status-warning mt-1"
                    errors={[fieldState.error]}
                  />
                )}
              </Field>
            )}
          />

          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="">
                <FieldLabel htmlFor="form-rhf-demo-password">
                  Password<span className="text-status-warning">*</span>
                </FieldLabel>
                <div className="relative flex w-full items-center">
                  <div className="absolute inset-y-0 left-3 flex items-center">
                    <Lock className="text-text-200 h-6 w-6" />
                  </div>

                  <Input
                    type={showPassword ? 'text' : 'password'}
                    variant="form"
                    {...field}
                    id="form-rhf-demo-password"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your password"
                    autoComplete="off"
                    className="border-text-main placeholder:text-text-200 aria-[invalid=true]:border-status-warning aria-[invalid=true]:focus:border-status-warning border pr-10 pl-10 transition-all duration-300 ease-in-out placeholder:text-lg placeholder:leading-[100%] placeholder:font-medium focus:outline-none"
                  />

                  <div
                    className="absolute inset-y-0 right-3 flex cursor-pointer items-center"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <EyeOff className="text-text-200 h-5 w-5" />
                    ) : (
                      <Eye className="text-text-200 h-5 w-5" />
                    )}
                  </div>
                </div>

                {fieldState.invalid && (
                  <FieldError
                    className="text-status-warning peer-aria-invalid:text-status-warning mt-1"
                    errors={[fieldState.error]}
                  />
                )}
                <Link
                  className="text-status-action font-pop mt-2 text-[0.75rem] leading-6 font-medium underline"
                  to="/resetpassword"
                >
                  Forgot your password
                </Link>
              </Field>
            )}
          />
        </FieldGroup>
      </form>
      <Field id="submit" orientation="horizontal">
        <Button type="submit" variant="primary" size="lg" form="form-rhf-demo">
          Sign in
        </Button>
      </Field>
    </div>
  );
}
