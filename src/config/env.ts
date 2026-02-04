// src/config/env.ts
type NodeEnv = 'development' | 'production' | 'test';

export const env = {
  NODE_ENV: (process.env.NODE_ENV as NodeEnv) || 'development',
  PORT: 3000,
  APP_NAME: 'Goafricafound App' as const,
  APP_URL: 'https://goafricafound.com' as const,
  AUTH_URL: 'https://goafricafound.com/auth/login' as const,


  // Base URLs
  DEFAULT_REDIRECT_URL: 'https://goafricafound.com' as const,
  

};
