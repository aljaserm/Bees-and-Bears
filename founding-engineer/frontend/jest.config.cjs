module.exports = {
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.css$': 'jest-transform-stub',
    },
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx'],
    setupFilesAfterEnv: ['./jest.setup.js'],
    transformIgnorePatterns: ['/node_modules/'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',    // Include all .js and .jsx files in the src directory
        '!src/index.js',        // Exclude index.js file
        '!src/serviceWorker.js' // Exclude serviceWorker.js file
    ],
    coverageReporters: [
        'html',
        'text'
    ],
};
