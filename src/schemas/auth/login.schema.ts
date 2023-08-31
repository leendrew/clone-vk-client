import { z } from 'zod';
import { email, password } from '../shared.schema';

export const loginSchema = z.object({
  email,
  password,
});
