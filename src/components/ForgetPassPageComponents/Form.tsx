'use client';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Field, FieldGroup } from '@/components/ui/field';
import { ChevronDown, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button/button';
import { data, useSearchParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface FormProps {
  type: 'email' | 'phone';
}

const signupSchema = z.object({
  email: z.string().email('We cannot find your email.').optional(),
  phone: z
    .string()
    .regex(/^\+?\d{7,15}$/, 'We cannot find your phone number.')
    .optional(),
});

type resetPassFormValues = z.infer<typeof signupSchema>;

const Form: React.FC<FormProps> = ({ type }) => {
  const [, setSearchParams] = useSearchParams();

  const switchDialog = (
    target: 'sign-in' | 'sign-up' | 'forget-password' | 'reset_pass' | 'email-verfiy',
  ) => {
    const email = form.getValues('email');
    const phone = form.getValues('phone');

    const params: Record<string, string> = { auth: target };
    if (email) params.email = email;
    if (phone) params.phone = phone;

    setSearchParams(params);
  };

  const forgetPassMutation = useMutation({
    mutationFn: async (data: resetPassFormValues) => {
      const payload = type === 'email' ? { email: data.email } : { phone: data.phone };

      const res = await axios.post('http://localhost:3000/api/v1/auth/forgot-password', payload);
      return res.data;
    },
    onSuccess: () => {
      setSearchParams({ auth: 'reset-pass-otp', email: data.email });
    },
  });

  const form = useForm<resetPassFormValues>({
    resolver: zodResolver(signupSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      phone: '',
    },
  });

  // const submitData = (data: resetPassFormValues) => {
  //   try {
  //     const payload =
  //       type === 'email'
  //         ? { email: data.email }
  //         : { phone: data.phone };
  //     const res = axios.post('http://localhost:3000/api/v1/auth/forgot-password', payload);
  //     setSearchParams({ auth: 'set-new-password' });

  //     console.log(res);

  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  const isDisabled = type === 'email' ? !form.watch('email') : !form.watch('phone');

  return (
    <div className="flex w-full items-center justify-center">
      <form
        onSubmit={form.handleSubmit((data) => forgetPassMutation.mutate(data))}
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
        </FieldGroup>

        <div className="flex w-full flex-col gap-2">
          <Button
            disabled={isDisabled}
            title="Continue"
            type="submit"
            variant="primary"
            form="form-rhf-demo"
            className="rounded-7xl h-12"
            onClick={() => forgetPassMutation.mutate(form.getValues())}
          />
        </div>
        <Field className="flex justify-center gap-1" id="signin" orientation="horizontal">
          <span className="text-text-secondary leading-leading-lg text-sm font-light">
            Remembered your password?
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
