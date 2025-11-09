'use client';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Field, FieldGroup } from '@/components/ui/field';
import { ChevronDown, CircleX, Eye, EyeOff, Lock, Mail, Store } from 'lucide-react';
import { Button } from '@/components/ui/button/button';
import { Separator } from '@/components/ui/separator';
import { useSearchParams } from 'react-router-dom';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '../ui/label';
import Google from '@/assets/svg/Google';
import { useRegister } from '@/hooks/registration';

interface FormProps {
  type: 'email' | 'phone';
  username: string;
}

const signupSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Enter a valid email address').optional(),
  phone: z
    .string()
    .regex(/^\+?\d{7,15}$/, 'Enter a valid phone number')
    .optional(),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmedPassword: z.string().min(8, 'Confirm password must be at least 8 characters'),
  store: z.string().optional(),
});

type SignupFormValues = z.infer<typeof signupSchema>;

const Form: React.FC<FormProps> = ({ type, username }) => {
  const [, setSearchParams] = useSearchParams();
  const registrationMutation = useRegister();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  const switchDialog = (
    target: 'sign-in' | 'sign-up' | 'forget-password' | 'reset_pass' | 'email-verfiy',
  ) => {
    setSearchParams({ auth: target });
  };

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    mode: 'onChange',
    defaultValues: {
      username: username,
      email: '',
      phone: '',
      password: '',
      store: '',
      confirmedPassword: '',
    },
  });

  const isfilled = form.watch('store');
  const isDisabled =
    type === 'email'
      ? !form.watch('email') || !form.watch('password') || !username
      : !form.watch('phone') || !form.watch('password') || !username;

  const onSubmit = async (data: SignupFormValues) => {
    try {
      const payload = {
        username: data.username,
        email: data.email || '',
        password: data.password,
        confirmPassword: data.confirmedPassword,
        createStore: checked ? 'yes' : 'no',
        storeName: checked ? data.store : undefined,
      };

      const response = await registrationMutation.mutateAsync(payload);
      console.log('Server response:', response);
      toast.success('Registration successful!');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="flex w-full justify-center">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center justify-center gap-4"
      >
        <FieldGroup className="flex flex-col gap-4">
          {type === 'email' ? (
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    prefixIcon={<Mail size={18} />}
                    label="Email Address"
                    placeholder="Enter your email"
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
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    prefixIcon={<ChevronDown size={18} />}
                    label="Phone Number"
                    placeholder="+972"
                    required
                    {...field}
                    error={fieldState.error?.message}
                    className="h-3"
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
                    prefixIcon={<Lock size={18} />}
                    label="Password"
                    placeholder="Enter your password"
                    type={showPassword ? 'text' : 'password'}
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
                    required
                    {...field}
                    error={fieldState.error?.message}
                    className="h-3"
                  />
                </div>
              </Field>
            )}
          />

          <Controller
            name="confirmedPassword"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <div className="relative flex w-full items-center">
                  <Input
                    prefixIcon={<Lock size={18} />}
                    label="Confirm Password"
                    placeholder="Confirm your password"
                    type={showConfirmedPassword ? 'text' : 'password'}
                    suffixIcon={
                      showConfirmedPassword ? (
                        <EyeOff
                          onClick={() => setShowConfirmedPassword((prev) => !prev)}
                          className="cursor-pointer"
                          size={18}
                        />
                      ) : (
                        <Eye
                          onClick={() => setShowConfirmedPassword((prev) => !prev)}
                          className="cursor-pointer"
                          size={18}
                        />
                      )
                    }
                    required
                    {...field}
                    error={fieldState.error?.message}
                    className="h-3"
                  />
                </div>
              </Field>
            )}
          />

          <Field>
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <div className="flex w-full flex-col">
                <div className="flex w-full items-center gap-1">
                  <Checkbox onClick={() => setChecked(!checked)} checked={checked} />
                  <Label onClick={() => setChecked(!checked)}>Create your own store?</Label>
                </div>
                <span className="text-text-secondary text-sm">
                  Use this option to open your store on FirstChance.
                </span>
              </div>

              <div className="flex w-full flex-col gap-1">
                {checked && (
                  <Controller
                    name="store"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <Input
                          prefixIcon={<Store size={16} />}
                          type="text"
                          suffixIcon={
                            isfilled && (
                              <CircleX
                                onClick={() => field.onChange('')}
                                size={18}
                                className="fill-text-disabled text-background cursor-pointer"
                              />
                            )
                          }
                          label="Name your store"
                          placeholder="Enter your store name"
                          {...field}
                          error={fieldState.error?.message}
                          className="h-3"
                        />
                      </Field>
                    )}
                  />
                )}
              </div>
            </div>
          </Field>
        </FieldGroup>

        <div className="flex w-full flex-col gap-2">
          <Button
            disabled={isDisabled || registrationMutation.isLoading}
            title="Sign Up"
            type="submit"
            variant="primary"
            className="rounded-7xl h-12"
          />
          <div className="flex items-center justify-center gap-2">
            <Separator />
            <div className="text-text-disabled flex w-full items-center justify-center text-sm">
              or sign up with
            </div>
            <Separator />
          </div>

          <Button
            prefixIcon={<Google />}
            title="Google"
            type="submit"
            variant="secondary"
            className="rounded-7xl h-12"
          />
        </div>

        <Field className="flex justify-center gap-1" id="signin" orientation="horizontal">
          <span className="text-text-secondary leading-leading-lg text-sm font-light">
            Already have an account?
          </span>
          <span onClick={() => switchDialog('sign-in')} className="link-text cursor-pointer">
            Sign In
          </span>
        </Field>
      </form>
    </div>
  );
};

export default Form;
