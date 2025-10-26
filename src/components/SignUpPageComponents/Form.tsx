'use client';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Field, FieldGroup } from '@/components/ui/field';
import { ChevronDown, Chromium, CircleX, Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button/button';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '../ui/label';

interface FormProps {
  type: 'email' | 'phone';
}

// Zod schema for validation
const signupSchema = z.object({
  email: z.string().email('Enter a valid email address').optional(),
  phone: z
    .string()
    .regex(/^\+?\d{7,15}$/, 'Enter a valid phone number')
    .optional(),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  store: z.string().optional(),
});

type SignupFormValues = z.infer<typeof signupSchema>;

const Form: React.FC<FormProps> = ({ type }) => {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      phone: '',
      password: '',
      store: '',
    },
  });
  const isfilled = form.watch('store');
  const isDisabled =
    type === 'email'
      ? !form.watch('email') || !form.watch('password')
      : !form.watch('phone') || !form.watch('password');

  const onSubmit = (data: SignupFormValues) => {
    toast.success(`${type === 'email' ? 'Email' : 'Phone'} registered successfully!`);
    console.log(data);
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
                    prefixIcon={<Mail size={18} className="text-text-primary" />}
                    label="Email Address"
                    placeholder="Enter your email"
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
                    prefixIcon={<ChevronDown size={18} className="text-text-primary" />}
                    label="Phone Number"
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
                    prefixIcon={<Lock size={18} className="text-text-primary" />}
                    label="Password"
                    placeholder="Enter your password"
                    type={showPassword ? 'text' : 'password'}
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
                    required
                    {...field}
                    error={fieldState.error?.message}
                  />
                </div>
              </Field>
            )}
          />
          <Field>
            <div className="flex w-full flex-col items-center gap-2">
              <div className="flex w-full items-center gap-1">
                <Checkbox />
                <Label>Create your own store?</Label>
              </div>
              <div className="flex w-full flex-col gap-1">
                <Controller
                  name="store"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <Input
                        type="text"
                        suffixIcon={
                          isfilled && (
                            <CircleX
                              onClick={() => field.onChange('')}
                              size={18}
                              className="bg-text-disabled text-background cursor-pointer"
                            />
                          )
                        }
                        label="Name your store"
                        placeholder="Enter your name store"
                        {...field}
                        error={fieldState.error?.message}
                      />
                    </Field>
                  )}
                />
              </div>
            </div>
          </Field>
        </FieldGroup>

        <div className="flex w-full flex-col gap-2">
          <Button
            disabled={isDisabled}
            title="Get Started"
            type="submit"
            variant="primary"
            form="form-rhf-demo"
          />
          <div className="flex items-center justify-center gap-2">
            <Separator />
            <div className="text-text-disabled flex w-full items-center justify-center text-sm">
              or sign up with
            </div>
            <Separator />
          </div>

          <Button
            prefixIcon={<Chromium size={18} className="text-accent-primary" />}
            title="Google"
            type="submit"
            variant="secondary"
            form="form-rhf-demo"
          />
        </div>
        <Field className="flex justify-center gap-1" id="signup" orientation="horizontal">
          <span className="text-text-secondary leading-leading-lg text-sm font-light">
            Already have an account?
          </span>
          <Link to={'/sign-in'} className="link-text">
            Sign In
          </Link>
        </Field>
      </form>
    </div>
  );
};

export default Form;
