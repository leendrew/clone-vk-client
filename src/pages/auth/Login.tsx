import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLoginMutation } from '@/app/auth';
import type { LoginDto } from '@/app/auth';
import { loginSchema } from '@/schemas/auth';
import { Button } from '@/components/ui/button';
import { classNames } from '@/lib/utils';
import styles from './auth.module.css';

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDto>({
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const onSubmitHandler = async (data: LoginDto) => {
    await login(data).catch(console.error);
    navigate('/feed', { replace: true });
  };

  const onRegisterClickHandler = () => navigate('/auth/register');

  return (
    <>
      <div className={styles.card}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
          <span className={classNames('title--1', 'text--center')}>Вход</span>
          <label className={styles.formItem}>
            <span className="title--3">E-mail</span>
            <input
              className={classNames(styles.formInput, errors.email ? styles.error : styles.default)}
              type="email"
              placeholder="Введите e-mail"
              {...register('email')}
            />
            {errors.email && <span className={styles.formItemError}>{errors.email?.message}</span>}
          </label>
          <label className={styles.formItem}>
            <span className="title--3">Пароль</span>
            <input
              className={classNames(
                styles.formInput,
                errors.password ? styles.error : styles.default,
              )}
              type="text"
              placeholder="Введите пароль"
              {...register('password')}
            />
            {errors.password && (
              <span className={styles.formItemError}>{errors.password?.message}</span>
            )}
          </label>
          <Button htmlType="submit" isLoading={isLoading}>
            Войти
          </Button>
        </form>
      </div>
      <div className={styles.card}>
        <div className={styles.islandContent}>
          <Button htmlType="button" type="secondary" onClick={onRegisterClickHandler}>
            Зарегистрироваться
          </Button>
        </div>
      </div>
    </>
  );
};
