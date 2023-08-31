import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './auth.api';

export interface AuthData {
  accessToken: string;
  expiresIn: number;
  userId: number;
}

interface AuthState {
  data: AuthData | null;
  isAuth: boolean;
}

const initialState: AuthState = {
  data: null,
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
        window.localStorage.setItem('authData', JSON.stringify(payload));
        state.data = payload;
        state.isAuth = true;
      })
      .addMatcher(authApi.endpoints.register.matchFulfilled, (state, { payload }) => {
        state.data = payload;
        state.isAuth = true;
      });
  },
});

export const { actions: authActions, reducer: authReducer } = authSlice;
