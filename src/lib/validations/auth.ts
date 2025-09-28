import z from 'zod';
export const loginScheme = z.object({
  email: z
    .string()
    .nonempty({ message: 'Email is required' })
    .email({ message: 'Invalid email' }),
  password: z
    .string()
    .nonempty({ message: 'Password is required' })
    .min(6, { message: 'Password must be at least 6 characters' }),
});

export const registerScheme = z
  .object({
    name: z.string().nonempty({ message: 'Name is required' }),
    email: z
      .string()
      .nonempty({ message: 'Email is required' })
      .email({ message: 'Invalid email' }),
    phone: z
      .string()
      .nonempty({ message: 'Phone number is required' })
      .min(6, { message: 'Invalid phone number' }),
    password: z
      .string()
      .nonempty({ message: 'Password is required' })
      .min(6, { message: 'Password must be at least 6 characters' }),
    confirmPassword: z
      .string()
      .nonempty({ message: 'Confirm password is required' })
      .min(6, { message: 'Password must be at least 6 characters' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type TloginScheme = z.infer<typeof loginScheme>;
export type TregisterScheme = z.infer<typeof registerScheme>;
