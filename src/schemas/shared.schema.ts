import { z } from 'zod';

export const email = z
  .string({
    required_error: 'Это поле обязательно для заполнения',
  })
  .email('Некорректный e-mail');
export const password = z
  .string({
    required_error: 'Это поле обязательно для заполнения',
  })
  .min(5, 'Пароль слишком короткий');
