function isGoodNumber(input) {
  return goodHelperNumber(input, 0);
}

function goodHelperNumber(input, index) {
  if (index >= input.length) {
    return true;
  }

  const num = Number(input.charAt(index));

  if (isEven(index) && !isEven(num)) {
    return false;
  }

  if (!isEven(index) && !isPrime(num)) {
    return false;
  }

  return goodHelperNumber(input, index + 1);
}

function isEven(num) {
  return num % 2 === 0;
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  if (num === 2) {
    return true;
  }

  return primeHelper(num, 2);
}

function primeHelper(num, divisor) {
  if (divisor > Math.sqrt(num)) {
    return true;
  }

  if (num % divisor === 0) {
    return false;
  }

  return primeHelper(num, divisor + 1);
}

isGoodNumber('02468');
isGoodNumber('23478');
isGoodNumber('224365');