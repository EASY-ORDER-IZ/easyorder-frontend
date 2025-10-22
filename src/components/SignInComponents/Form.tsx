'use client';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { Field, FieldGroup } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import formSchema from '@/validation/formSchema';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button/button';
import { useAuthStore } from '@/store/authStore';
import { toast } from 'sonner';
import LogoSVG from '@/assets/svg/logo';
import SearchComponent from '../CommonComponents/Search';

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
      navigate('/');
      console.log(data);
    } else {
      toast.error('Invalid credentials');
    }
  }
  return (
    <div className="bg-background flex w-full flex-col gap-9 p-4">
      <div className="flex justify-center gap-4">
        <LogoSVG />
      </div>

      <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup className="flex flex-col">
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <div>
                  <Input
                    prefixIcon={<Mail size={18} className="text-text-disabled" />}
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
              <Field data-invalid={fieldState.invalid} className="">
                <div className=""></div>

                <div className="relative flex w-full items-center">
                  <div className="absolute inset-y-0 left-2 flex items-center"></div>

                  <Input
                    suffixIcon={
                      showPassword ? (
                        <EyeOff
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="text-text-disabled cursor-pointer"
                          size={18}
                        />
                      ) : (
                        <Eye
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="text-text-disabled cursor-pointer"
                          size={18}
                        />
                      )
                    }
                    prefixIcon={<Lock size={18} className="text-text-disabled" />}
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
        <div className="flex w-full flex-col gap-2.5">
          <Button type="submit" variant="primary" form="form-rhf-demo">
            Login
          </Button>
        </div>
      </Field>
      <Field className="flex justify-center" id="signup" orientation="horizontal">
        <span className="text-text-secondary leading-leading-lg text-sm font-light">
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
      <SearchComponent />
    </div>
  );
}
