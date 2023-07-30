function calculatePower(x, n) {
  if (n === 0) {
    return 1;
  }

  if (n < 0) {
    return 1 / calculatePower(x, -n);
  }

  if (n % 2 === 0) {
    return calculatePower(x, Math.floor(n / 2)) * calculatePower(x, Math.floor(n / 2));
  } else {
    return x * calculatePower(x, Math.floor(n / 2)) * calculatePower(x, Math.floor(n / 2));
  }
}

calculatePower(2, 5);
calculatePower(3, 4);
calculatePower(5, 0);