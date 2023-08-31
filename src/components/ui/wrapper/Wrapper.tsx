import React from 'react';
import { classNames } from '@/lib/utils';
import styles from './wrapper.module.css';

type MaxWidth = 'lg' | 'md' | 'sm' | 'xs';

type WrapperProps = {
  children: React.ReactNode;
  maxWidth?: MaxWidth;
};

export const Wrapper: React.FC<WrapperProps> = ({ children, maxWidth = 'lg' }) => {
  const maxWidthMap = {
    xs: styles.xs,
    sm: styles.sm,
    md: styles.md,
    lg: styles.lg,
  };

  return <div className={classNames(styles.wrapper, maxWidthMap[maxWidth])}>{children}</div>;
};
