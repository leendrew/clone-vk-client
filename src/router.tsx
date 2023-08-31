import { createBrowserRouter } from 'react-router-dom';
import { WithAuth } from '@/hocs/WithAuth';
import { Login, Register } from '@/pages/auth';
import { Feed } from '@/pages/feed';
import { Profile } from '@/pages/profile';
import { AuthLayout } from './components/ui/layouts/auth/AuthLayout';

export const router = createBrowserRouter([
  {
    path: '/auth',
    index: false,
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/feed',
    element: (
      <WithAuth>
        <Feed />
      </WithAuth>
    ),
  },
  {
    path: '/:id',
    element: <Profile />,
  },
]);
