/*
inputs: an array of numbers named A
        a target value named N

initialize a new Map named numbers
initialize a new Map named solution

for each element e in A do:
   add e to numbers

for each element e in A do;
  calculate diff = N - e
  if diff is not equal to e then  (1)
     look up diff in numbers
     if diff is in numbers then
       add [e, diff] to solution (2)

convert solution to an array and return it
*/

/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
function sumPairs(A, N) {
  const numbers = new Map();
  const solution = new Map();

  A.forEach((element) => {
    numbers.set(element, element);
  });

  A.forEach((element) => {
    const difference = N - element;

    if (difference !== element) {
      if (numbers.get(difference)) {
        if (difference > element) {
          solution.set(element, difference);
        } else {
          solution.set(difference, element);
        }
      }
    }
  });

  return [...solution];
}

module.exports = sumPairs;
