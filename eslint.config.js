import biomeConfig from 'eslint-config-biome';
import sonarjs from 'eslint-plugin-sonarjs';

export default [
  biomeConfig,
  sonarjs.configs.recommended,
  {
    rules: {
      'sonarjs/no-duplicate-string': 'warn',
      'sonarjs/no-identical-functions': 'warn',
      'sonarjs/no-duplicated-branches': 'warn',
      'sonarjs/cognitive-complexity': 'off', // Biome has this
    },
  },
  {
    ignores: ['node_modules/**', 'dist/**', 'coverage/**', 'playwright-report/**'],
  },
];
