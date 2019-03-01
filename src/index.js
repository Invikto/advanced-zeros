module.exports = function getZerosCount(number, base) {
  const zeroesCount = [];
  const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251];
  const primeFactors = new Map();
  let n = number;
  let b = base;
  let i = 0;

  while (b > 1) {
    if (b % primeNumbers[i] === 0) {
      let key = primeNumbers[i];
      let value = ((primeFactors.get(primeNumbers[i]) + 1) || 1);
      primeFactors.set(key, value);
      b /= primeNumbers[i];
    } else {
      i++;
    }
  }

  for (let pair of primeFactors) {
    let count = 0;
    i = pair[0];
    while (i <= n) {
      count += Math.floor(n / i);
      i *= pair[0];
    }
    count = Math.floor(count / pair[1]);
    zeroesCount.push(count);
  }

  zeroesCount.sort((a, b) => (a - b));

  return zeroesCount[0];
}
