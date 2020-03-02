const evaluate = require('../evaluate');

const earlyReturn2Tests = [
  { name: 'Test 1', args: [4], expected: 'param must be an array' },
  { name: 'Test 2', args: [{}], expected: 'param must be an array' },
  { name: 'Test 3', args: [() => { }], expected: 'param must be an array' },
  { name: 'Test 4', args: [[3, '3']], expected: '33' },
  { name: 'Test 5', args: [[3, 3]], expected: 6 },
  { name: 'Test 6', args: [], expected: 'param must be an array' },
];

function earlyReturn2(param) {
  // write an early return to pass the test cases
  if (!Array.isArray(param)) {
    return 'param must be an array';
  }

  return param.reduce((acc, item) => acc + item);
}

evaluate(earlyReturn2, earlyReturn2Tests);
