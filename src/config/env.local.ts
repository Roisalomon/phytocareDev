// src/config/env.local.ts

type NodeEnv = 'development' | 'production' | 'test';

export const env = {
  NODE_ENV: 'development' as NodeEnv,
  PORT: 3000,

  APP_NAME: 'FormationTest' as const,
  APP_URL: 'http://localhost:3000/' as const,

  // Auth
  AUTH_URL: 'http://localhost:3000/auth/login' as const,

  // Redirect
  DEFAULT_REDIRECT_URL: 'http://localhost:3000' as const,

  // 🔥 ROUTES INTERNES DE L'APP
  ROUTES: {
    HOME: "/",
    COURS: "/cours",
    EXERCICES: "/exercices",
    LOGIN: "/auth/login",
    DASHBOARD: "/dashboard",
  } as const,
};


