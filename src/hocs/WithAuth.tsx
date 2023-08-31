import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '@/app';

type WithAuthProps = {
  children: React.ReactElement;
};

export const WithAuth = ({ children }: WithAuthProps) => {
  const location = useLocation();
  const isAuth = useAppSelector((store) => store.auth.isAuth);
  if (!isAuth) return <Navigate to="/auth/login" replace state={{ from: location }} />;

  return children;
};
