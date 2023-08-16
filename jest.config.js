module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testTimeout:5000,
    collectCoverage:true,
    watchAll:false,
    output: 'output/coverage/junit/junit.xml'
  };