import { z } from 'zod';
import { email, password, ERROR_REQUIRED } from '../shared.schema';

export const registerSchema = z
  .object({
    email,
    password,
    confirmPassword: z.string({
      required_error: ERROR_REQUIRED,
    }),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });
