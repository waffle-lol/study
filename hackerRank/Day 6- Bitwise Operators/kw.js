// https://www.hackerrank.com/challenges/js10-bitwise

const getMaxLessThanK = (n, k) => {
  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n + 1; j++ ) {
      const newValue = i & j;
      if (newValue > max && newValue < k) max = newValue;
    }
  }
  return max;
}
