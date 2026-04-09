import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['src/index.ts', 'src/playground/main.tsx'],
  project: ['src/**/*.{ts,tsx}'],
  ignore: ['**/*.test.{ts,tsx}', '**/*.testIds.ts'],
  ignoreDependencies: ['@types/*'],
};

export default config;
