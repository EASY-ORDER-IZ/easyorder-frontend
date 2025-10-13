'use client';

import * as React from 'react';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';

import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import formSchema from '@/validation/formSchema';

export function FormComponent() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast('You submitted the following values:', {
      description: (
        <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: 'bottom-right',
      classNames: {
        content: 'flex flex-col gap-2',
      },
      style: {
        '--border-radius': 'calc(var(--radius) + 4px)',
      } as React.CSSProperties,
    });
  }

  return (
    <div className="flex w-100 flex-col">
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
              <Field data-invalid={fieldState.invalid} className={``}>
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
              </Field>
            )}
          />
        </FieldGroup>
      </form>
    </div>
  );
}
