'use client';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '../ui/button/button';
import { useAuthStore } from '@/store/authStore';
import { Separator } from '../ui/separator';
import Google from '@/assets/svg/Google';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import PhoneInput from 'react-phone-input-2';

interface FormProps {
  type: 'email' | 'phone';
}

const Form = ({ type }: FormProps) => {
  const [, setSearchParams] = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const switchDialog = (
    target: 'sign-in' | 'sign-up' | 'forget-password' | 'reset_pass' | 'email-verfiy',
  ) => {
    setSearchParams({ auth: target });
  };

  const formSchema = z
    .object({
      email: z.string().email().optional().or(z.literal('')),
      phone: z
        .string()
        .regex(/^\+?\d{7,15}$/)
        .optional()
        .or(z.literal('')),
      password: z.string().min(6, 'Password must be at least 6 characters'),
    })
    .refine((data) => data.email || data.phone, {
      message: 'Please enter either email or phone',
      path: ['email'],
    });

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

  type Formdata = z.infer<typeof formSchema>;

  const mutation = useMutation({
    mutationFn: async (data: Formdata) => {
      const payload = {
        password: data.password,
        ...(type === 'email' ? { email: data.email } : { phone: data.phone }),
      };

      const response = await axios.post('http://localhost:3000/api/v1/auth/login', payload);
      return response.data;
    },
    onSuccess: (response) => {
      login(response);
      navigate('/');
    },
    onError: (error: AxiosError) => {
      const apiError = error.response?.data?.error;
      const details = apiError?.details?.[0];

      if (details?.field && details?.message) {
        form.setError(details.field as 'password' | 'email' | 'phone', {
          type: 'server',
          message: details.message,
        });
      } else {
        form.setError('password', {
          type: 'server',
          message: apiError?.message || 'Login failed',
        });
      }
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    mutation.mutate(data);
  };

  const goToForgetPassword = () => {
    const vals = form.getValues();
    setSearchParams({
      auth: 'forget-password',
      email: vals.email || '',
      phone: vals.phone || '',
    });
  };

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
                    className="h-3"
                  />
                </Field>
              )}
            />
          ) : (
            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <div className="flex w-full flex-col">
                  <PhoneInput
                    country="ps"
                    value={field.value}
                    onChange={(value) => field.onChange(value)}
                    inputProps={{ name: field.name, required: true, autoFocus: false }}
                    buttonClass="bg-transparent"
                    containerClass="w-full"
                    inputClass={`!w-full !h-11 !text-base !rounded-md !border ${
                      fieldState.invalid ? '!border-red-500' : '!border-gray-300'
                    }`}
                  />
                </div>
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
                    type={showPassword ? 'text' : 'password'}
                    {...field}
                    placeholder="Enter your password"
                    required
                    error={fieldState.error?.message}
                    className="h-3"
                  />
                </div>

                <div className="mt-1 flex w-full justify-end">
                  <button
                    type="button"
                    onClick={goToForgetPassword}
                    className="text-status-action text-sm underline"
                  >
                    Forgot password?
                  </button>
                </div>
              </Field>
            )}
          />

          <Field id="submit" orientation="horizontal">
            <div className="flex w-full flex-col gap-4">
              <Button
                disabled={isDisabled}
                title="Sign In"
                type="submit"
                variant="primary"
                form="form-rhf-demo"
                className="rounded-7xl h-12"
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
                className="rounded-7xl h-12"
              />

              <Field className="flex justify-center gap-1" id="signup" orientation="horizontal">
                <span className="text-text-secondary leading-leading-lg text-sm font-light">
                  Don't have an account?
                </span>
                <span onClick={() => switchDialog('sign-up')} className="link-text cursor-pointer">
                  Sign up
                </span>
              </Field>
            </div>
          </Field>
        </div>
      </form>
    </div>
  );
};

export default Form;
