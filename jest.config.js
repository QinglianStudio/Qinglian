module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.(j|t)sx?$': [
            '@swc-node/jest',
            {
              swc: {
                jsc: {
                  parser: {
                    syntax: 'typescript',
                    tsx: true,
                    dynamicImport: true,
                  },
                },
                module: {
                  type: 'commonjs',
                },
                sourceMaps: true,
              },
            },
          ],
    },
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    setupFilesAfterEnv: ['jest-extended'],
    preset: '@swc-node/jest',
    testPathIgnorePatterns: ['examples', 'fixtures', 'demo', 'style'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    transformIgnorePatterns: ['node_modules/(?!(ora)/)'],
    globalSetup: '<rootDir>/setupTests.js',
    collectCoverageFrom: [
      'packages/**/*.{js,jsx,ts,tsx}',
      '!**/fixtures/**',
      '!**/examples/**',
      '!**/demo/**',
      '!**/style/**',
      '!**/typings/**',
      '!**/types/**',
      '!**/__snapshots__/**',
      '!**/__tests__/**',
      '!**/es/**',
      '!**/lib/**',
    ],
    collectCoverage: false,
    coverageReporters: ['json', 'html'],
  };
  