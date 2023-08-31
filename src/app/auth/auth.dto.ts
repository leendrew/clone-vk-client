import type { AuthData } from './auth.slice';

export type LoginDto = {
  email: string;
  password: string;
};
export type LoginResponseDto = AuthData;

export type RegisterDto = {
  email: string;
  password: string;
  confirmPassword: string;
};
export type RegisterResponseDto = AuthData;
