const evaluate = require('../evaluate');

const numbersToSum1 = [-1, 0, 1];
const numbersToSum2 = [-1, 0, -1];
const numbersToSum3 = [1, 0, 1];
const nonNumbers1 = [1, 2, 3, '4'];
const nonNumbers2 = [true, null, undefined];

const sumAllTests = [
  { name: 'Test 1', args: [numbersToSum1], expected: 0 },
  { name: 'Test 2', args: [numbersToSum1], expected: 0 },
  { name: 'Test 3', args: [numbersToSum2], expected: -2 },
  { name: 'Test 4', args: [numbersToSum2], expected: -2 },
  { name: 'Test 5', args: [[1, 2, 3]], expected: 6 },
  { name: 'Test 6', args: [numbersToSum3], expected: 2 },
  { name: 'Test 7', args: [numbersToSum3], expected: 2 },
  { name: 'Test 8', args: [nonNumbers1], expected: null },
  { name: 'Test 9', args: [nonNumbers1], expected: null },
  { name: 'Test 10', args: [nonNumbers2], expected: null },
  { name: 'Test 11', args: [nonNumbers2], expected: null },
];

const sumAll = (arr) => {
  // write me!
  return arr.reduce((acc, item) => acc + item);
  // Hint: early return - are there any non-numbers?
  arr.forEach(e => console.log(e))
};

evaluate(sumAll, sumAllTests);
