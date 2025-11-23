'use client';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Field, FieldGroup } from '@/components/ui/field';
import { Button } from '@/components/ui/button/button';
import { useSearchParams } from 'react-router-dom';
import Title from '@/components/SignInComponents/Title';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, Lock } from 'lucide-react';

const otpSchema = z.object({
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type OtpFormValues = z.infer<typeof otpSchema>;

const Form: React.FC = () => {
  const [, setSearchParams] = useSearchParams();

  const switchDialog = (
    target: 'sign-in' | 'sign-up' | 'forget-password' | 'reset_pass' | 'set-new-password',
  ) => {
    setSearchParams({ auth: target });
  };

  const form = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
    mode: 'onSubmit',
    defaultValues: { password: '' },
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = () => {
    switchDialog('sign-in');
  };

  const hasError = !!form.formState.errors.password;
  const isDisabled = form.watch('password').length < 8 || hasError;

  return (
    <div className="flex w-full items-center justify-center gap-6 p-4">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center justify-center gap-5"
      >
        <Title
          title="Set a new Password"
          desc="Must be at least 8 characters long, with at least one uppercase letter."
        />

        <FieldGroup className="flex flex-col items-center justify-center gap-2">
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
                    className={`h-3 ${
                      fieldState.invalid
                        ? 'border-red-500 text-red-600 focus:border-red-600 focus:ring-red-300'
                        : ''
                    }`}
                  />
                </div>

                {fieldState.error && (
                  <p className="text-status-danger mt-1 px-1 text-xs">{fieldState.error.message}</p>
                )}
              </Field>
            )}
          />
        </FieldGroup>

        <Button
          disabled={isDisabled}
          title="Confirm"
          type="submit"
          variant="primary"
          className="rounded-7xl h-12 w-full max-w-88"
        />

        <div className="text-text-400 text-center text-xs">
          Remembered your password?{' '}
          <span
            onClick={() => switchDialog('sign-in')}
            className="text-status-action cursor-pointer underline"
          >
            Sign In
          </span>
        </div>
      </form>
    </div>
  );
};

export default Form;
