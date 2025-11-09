import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Field, FieldGroup } from '@/components/ui/field';
import { Eye, EyeOff, Lock, Mail, Store } from 'lucide-react';
import { Button } from '@/components/ui/button/button';
import { Separator } from '@/components/ui/separator';
import { useSearchParams } from 'react-router-dom';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '../ui/label';
import Google from '@/assets/svg/Google';
import axios from 'axios';
import { useRegister } from '@/hooks/registration';
import PhoneInputField from './PhoneInput';
interface FormProps {
  type: 'email' | 'phone';
  username: string;
}

const signupSchema = z
  .object({
    username: z
      .string()
      .min(3, 'Username must be at least 3 characters')
      .max(20, 'Username must be at most 20 characters'),
    email: z.string().email('Enter a valid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string().min(8, 'Confirm password is required'),
    storeName: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type SignupFormValues = z.infer<typeof signupSchema>;

const Form: React.FC<FormProps> = ({ type, username }) => {
  const [, setSearchParams] = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      storeName: '',
    },
  });

  const isDisabled =
    !username ||
    (type === 'email' ? !form.watch('email') : false) ||
    !!form.formState.errors.password ||
    !!form.formState.errors.confirmPassword;

  const { mutate } = useRegister();

  const submitData = (data: SignupFormValues) => {
    const payload = {
      username,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      createStore: checked ? 'yes' : 'no',
      ...(checked && { storeName: data.storeName }),
    };

    console.log('Sending payload:', payload);

    mutate(payload, {
      onSuccess: (response) => {
        toast.success('Registered successfully!');
        console.log('Backend response:', response);

        setSearchParams({ auth: 'email-verify', email: data.email });

        // setTimeout(() => {
        //   Navigate(`/email-verify?email=${encodeURIComponent(data.email)}`);
        // }, 800);

        // setTimeout(() => {
        //   switchDialog('email-verify');
        //   setSearchParams({ auth: 'email-verify', email: data.email });
        // }, 8000);
      },
      onError: (error) => {
        if (axios.isAxiosError(error)) {
          console.error('Backend error:', error.response?.data);
          toast.error(error.response?.data?.message || 'Registration failed');
        } else {
          console.error('Unexpected error:', error);
          toast.error('Something went wrong');
        }
      },
    });
  };

  const switchDialog = (target: 'sign-in' | 'sign-up' | 'forget-password' | 'email-verify') => {
    setSearchParams({ auth: target });
  };

  return (
    <div className="flex w-full justify-center">
      <form
        onSubmit={form.handleSubmit(submitData)}
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
                  <PhoneInputField
                    // prefixIcon={<Phone size={18} />}
                    label="Phone Number"
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
                />
              </Field>
            )}
          />

          <Controller
            name="confirmPassword"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Input
                  prefixIcon={<Lock size={18} />}
                  label="Confirm Password"
                  placeholder="Re-enter your password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  suffixIcon={
                    showConfirmPassword ? (
                      <EyeOff
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        className="cursor-pointer"
                        size={18}
                      />
                    ) : (
                      <Eye
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        className="cursor-pointer"
                        size={18}
                      />
                    )
                  }
                  required
                  {...field}
                  error={fieldState.error?.message}
                />
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

              {checked && (
                <Controller
                  name="storeName"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <Input
                        prefixIcon={<Store />}
                        type="text"
                        label="Store Name"
                        placeholder="Enter your store name"
                        {...field}
                        error={fieldState.error?.message}
                      />
                    </Field>
                  )}
                />
              )}
            </div>
          </Field>
        </FieldGroup>

        <div className="flex w-full flex-col gap-2">
          <Button
            disabled={isDisabled}
            title="Get Started"
            type="submit"
            variant="primary"
            onClick={() => submitData(form.getValues())}
          />
          <div className="flex items-center justify-center gap-2">
            <Separator />
            <div className="text-text-disabled flex w-full items-center justify-center text-sm">
              or sign up with
            </div>
            <Separator />
          </div>

          <Button prefixIcon={<Google />} title="Google" type="button" variant="secondary" />
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
