import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '@/config';
import type { RootState } from './store';

const baseUrl = config.DEV ? 'http://localhost:8080/api' : '';

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token =
      (getState() as RootState).auth.data?.accessToken ||
      JSON.parse(window.localStorage.getItem('authData') || '').accessToken;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const api = createApi({
  reducerPath: 'api',
  baseQuery,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
