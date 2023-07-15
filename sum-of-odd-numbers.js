function sumOfOddNumbersIterative(n) {
  let sum = 0;
  
  for (let i = n; i > 0; i--) {
    if (i % 2 === 1) {
      sum += i; 
    }
  }

  return sum;
}

sumOfOddNumbersIterative(10);

function sumOfOddNumbersRecursive(n) {  
  if (n === 0) {
    return n;
  } 
  
  if (n % 2 === 0) {
    return sumOfOddNumbersRecursive(n - 1); 
  }
  
  return n + sumOfOddNumbersRecursive(n - 1); 
}

sumOfOddNumbersRecursive(10);