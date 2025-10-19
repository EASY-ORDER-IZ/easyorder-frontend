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
import LogoSVG from '@/assets/svg/logo';

export function FormComponent() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [isDisabled] = useState(false);

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
    <div className="flex min-w-105 flex-col gap-6">
      <LogoSVG />
      <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-rhf-demo-email">
                  Email <span className="text-status-warning">*</span>
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
                    className="border-text-main placeholder:text-text-200 aria-[invalid=true]:border-status-warning aria-[invalid=true]:focus:border-status-warning placeholder:text-list border pr-10 pl-10 transition-all duration-300 ease-in-out placeholder:leading-[100%] placeholder:font-medium"
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
                  Password <span className="text-status-warning">*</span>
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
                    className="border-text-main placeholder:text-text-200 aria-[invalid=true]:border-status-warning aria-[invalid=true]:focus:border-status-warning placeholder:text-list border pr-10 pl-10 transition-all duration-300 ease-in-out placeholder:leading-[100%] placeholder:font-medium focus:outline-none"
                  />

                  <div
                    className="absolute inset-y-0 right-2 flex cursor-pointer items-center"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <EyeOff className="text-text-200 h-6 w-6" />
                    ) : (
                      <Eye className="text-text-200 h-6 w-6" />
                    )}
                  </div>
                </div>

                {fieldState.invalid && (
                  <FieldError
                    className="text-status-warning peer-aria-invalid:text-status-warning mt-1"
                    errors={[fieldState.error]}
                  />
                )}
                <Field
                  id="forgot-password"
                  className="mt-1 flex justify-end"
                  orientation="horizontal"
                >
                  <Link
                    className="text-status-action font-pop text-[0.75rem] leading-6 font-medium underline"
                    to="/resetpassword"
                  >
                    Forgot your password?
                  </Link>
                </Field>
              </Field>
            )}
          />
        </FieldGroup>
      </form>
      <Field className="mt-3" id="submit" orientation="horizontal">
        <Button className="font-pop" type="submit" variant="primary" form="form-rhf-demo">
          Login
        </Button>
      </Field>
      <Field className="flex justify-center" id="signup" orientation="horizontal">
        <span className="font-pop text-text-400 text-[0.75rem] leading-6 font-light">
          Don't have an account?
        </span>
        <Link
          to={isDisabled ? '#' : '/signup'}
          aria-disabled={isDisabled}
          className={`link-text ${isDisabled ? 'disabled-link' : ''}`}
          tabIndex={isDisabled ? -1 : undefined}
        >
          Sign up
        </Link>
      </Field>
    </div>
  );
}
