const evaluate = require('../evaluate');

const earlyReturn4Tests = [
  { name: 'Test 1', args: [x => x ? 'hi!' : 'bye!', true], expected: 'hi!' },
  { name: 'Test 2', args: [x => x ? 'hi!' : 'bye!', false], expected: 'bye!' },
  { name: 'Test 3', args: [x => x ? 'x is true' : 'x is false', false], expected: 'x is false' },
  { name: 'Test 4', args: [x => x ? 'x is true' : 'x is false', true], expected: 'x is true' },
  { name: 'Test 5', args: [4, false], expected: 'func must be a function' },
  { name: 'Test 6', args: [() => { }, '3'], expected: 'argForFunc must be a boolean' },
  { name: 'Test 7', args: [() => { }], expected: 'argForFunc must be a boolean' },
];
function earlyReturn4(func, argForFunc) {
  // write the early returns to pass the assertions and the test cases
  if (typeof func !== 'function')
    return 'func must be a function';
  if (typeof argForFunc !== 'boolean')
    return 'argForFunc must be a boolean';
  console.assert(typeof func === 'function', 'func should be a function');
  console.assert(typeof argForFunc === 'boolean', 'argForFunc should be a boolean');

  return func(argForFunc);
}

evaluate(earlyReturn4, earlyReturn4Tests);
