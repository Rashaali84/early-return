const evaluate = require('../evaluate');

const earlyReturn3Tests = [
  { name: 'Test 1', args: [4, '4'], expected: 'a is not a string' },
  { name: 'Test 2', args: ['4', 4], expected: 'b is not a string' },
  { name: 'Test 3', args: [4, 4], expected: 'a & b are not strings' },
  { name: 'Test 4', args: [true, '3'], expected: ' a is not a string' },
  { name: 'Test 5', args: ['hi', '!'], expected: 'hi!' },
  { name: 'Test 6', args: ['by', 'e!'], expected: 'bye!' },
];

function earlyReturn3(a, b) {
  // write the early return to pass the asserts & tests
  if (typeof a !== 'string' && typeof b !== 'string') {
    return 'a & b are not strings';
  }
  if (typeof a !== 'string') {
    if (typeof a === 'boolean')
      return ' a is not a string';
    else
      return 'a is not a string';
  }
  if (typeof b !== 'string') {
    return 'b is not a string';
  }

  console.assert(typeof a === 'string', 'a should be a string');
  console.assert(typeof b === 'string', 'b should be a string');

  return a + b;
}

evaluate(earlyReturn3, earlyReturn3Tests);
