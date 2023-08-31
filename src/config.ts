enum ENV {
  BASE_URL = 'BASE_URL',
  VITE_PORT = 'VITE_PORT',
  MODE = 'MODE',
  DEV = 'DEV',
  PROD = 'PROD',
}

const checkEnv = (env: string): string => {
  const envValue = import.meta.env[env];
  if (envValue === undefined) {
    throw new Error(`Check that '${env}' really exist in your .env file`);
  }
  return envValue;
};

export const config = {
  BASE_URL: checkEnv(ENV.BASE_URL),
  VITE_PORT: checkEnv(ENV.VITE_PORT),
  MODE: checkEnv(ENV.MODE),
  DEV: checkEnv(ENV.DEV),
  PROD: checkEnv(ENV.PROD),
};
export type Config = typeof config;
