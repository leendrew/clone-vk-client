import { z } from 'zod';

export const ERROR_REQUIRED = 'Это поле обязательно для заполнения';

export const email = z
  .string({
    required_error: ERROR_REQUIRED,
  })
  .email('Некорректный e-mail');
export const password = z
  .string({
    required_error: ERROR_REQUIRED,
  })
  .min(5, 'Пароль слишком короткий');
