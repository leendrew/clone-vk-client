import { Outlet } from 'react-router-dom';
import { Wrapper } from '@/components/ui/wrapper';
import styles from './authLayout.module.css';

export const AuthLayout = () => {
  return (
    <>
      <main className={styles.main}>
        <Wrapper maxWidth="xs">
          <Outlet />
        </Wrapper>
      </main>
    </>
  );
};
