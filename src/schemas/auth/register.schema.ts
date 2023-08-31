import { z } from 'zod';
import { email, password } from '../shared.schema';

export const registerSchema = z
  .object({
    email,
    password,
    confirmPassword: z.string({
      required_error: 'Это поле обязательно',
    }),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });
