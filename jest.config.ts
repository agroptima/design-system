import type { Config } from 'jest'
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  testEnvironment: 'jsdom',
  clearMocks: true,
  moduleNameMapper: {
    '^.+\\.(svg)$': '<rootDir>/tests/svg.mock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  globals: {
    'ts-jest': {
      useESM: true,
      tsconfig: {
        verbatimModuleSyntax: false,
      },
    },
  },
}

module.exports = createJestConfig(config)
