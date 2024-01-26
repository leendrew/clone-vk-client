import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '@/config';
import type { RootState } from './store';

const baseUrl = config.DEV ? 'http://localhost:8080/api' : '';

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const storageData = window.localStorage.getItem('authData');
    if (!storageData) {
      return headers;
    }

    const token =
      (getState() as RootState).auth.data?.accessToken || JSON.parse(storageData).tokens.access;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
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
