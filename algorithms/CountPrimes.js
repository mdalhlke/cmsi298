/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let count = 0;

  if (n > 2) {
    count++;
  } else {
    return 0;
  }

  for (let i = 3; i < n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }

  return count;
};

function isPrime(value) {
  for (let i = 2; i < Math.sqrt(value) + 1; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
}
