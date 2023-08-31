import React from 'react';
import { Loader } from '@/components/ui/loader';
import { classNames } from '@/lib/utils';
import styles from './button.module.css';

type ButtonProps = {
  children: React.ReactNode;
  // variant?: 'text' | 'filled' | 'outlined';
  type?: 'primary' | 'secondary';
  isLoading?: boolean;
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
};

type HTMLButtonWithoutType = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

export const Button: React.FC<ButtonProps & HTMLButtonWithoutType> = ({
  children,
  htmlType = 'button',
  type = 'primary',
  isLoading = false,
  ...rest
}) => {
  const loadingStyle = isLoading ? styles.loading : styles.default;
  const typeMap = {
    primary: styles.primary,
    secondary: styles.secondary,
  };

  return (
    <button
      className={classNames(styles.common, loadingStyle, typeMap[type], '.text')}
      type={htmlType}
      disabled={isLoading}
      {...rest}
    >
      {isLoading && <Loader />}
      {!isLoading && children}
    </button>
  );
};
