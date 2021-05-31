import * as envalid from 'envalid';

export const env = envalid.cleanEnv(process.env, {
  PORT: envalid.num({ default: 3000, devDefault: 3001 }),
  NODE_ENV: envalid.str({ choices: ['development', 'test', 'production'] }),
});
