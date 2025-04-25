module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.ts$': 'ts-jest', // For TypeScript files
    },
    moduleFileExtensions: ['ts', 'js'], // Make sure Jest understands TypeScript and JavaScript files
  };
  