import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRegisterMutation } from '@/app/auth';
import type { RegisterDto } from '@/app/auth';
import { registerSchema } from '@/schemas/auth';
import { Button } from '@/components/ui/button';
import { classNames } from '@/lib/utils';
import styles from './auth.module.css';

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterDto>({
    mode: 'onSubmit',
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  const [registerRequest, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  const onSubmitHandler = async (data: RegisterDto) => {
    const payload = await registerRequest(data).unwrap().catch(console.error);
    navigate(`/${payload?.userId}`, { replace: true });
  };

  const onLoginClickHandler = () => navigate('/auth/login');

  return (
    <>
      <div className={styles.card}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
          <span className={`title--1 text--center`}>Регистрация</span>
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
          <label className={styles.formItem}>
            <span className="title--3">Подтверждение пароля</span>
            <input
              className={classNames(
                styles.formInput,
                errors.confirmPassword ? styles.error : styles.default,
              )}
              type="text"
              placeholder="Введите пароль еще раз"
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && (
              <span className={styles.formItemError}>{errors.confirmPassword?.message}</span>
            )}
          </label>
          <Button htmlType="submit" isLoading={isLoading}>
            Зарегистрироваться
          </Button>
        </form>
      </div>
      <div className={styles.card}>
        <div className={styles.islandContent}>
          <Button htmlType="button" type="secondary" onClick={onLoginClickHandler}>
            Войти
          </Button>
        </div>
      </div>
    </>
  );
};
