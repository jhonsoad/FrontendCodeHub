import type { Config } from 'jest';
import presets from 'jest-preset-angular/presets/index.js';

const { createCjsPreset } = presets as { createCjsPreset: (options?: any) => Config };

const config: Config = {
  ...createCjsPreset(),
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
};

export default config;
