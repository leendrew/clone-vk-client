import styles from './loader.module.css';

export const Loader = () => (
  <svg className={styles.loader} viewBox="0 0 24 24">
    <circle className={styles.circle} r="9.5" cy="12" cx="12" />
  </svg>
);
