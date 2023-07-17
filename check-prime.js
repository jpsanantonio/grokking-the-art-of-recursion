class Solution {
  isPrime(number) {
    if (number < 2) {
      return false;  
    }
    
    if (number === 2) {
      return true;
    }
    
    return this.checkDivisor(number, 2)
  }
  
  checkDivisor(number, divisor) {    
    if (number % divisor === 0) {
      return false;
    }
    
    if (divisor > Math.sqrt(number)) {
      return true;
    }
    
    return this.checkDivisor(number, divisor + 1);
  }
}


const solution = new Solution();

solution.isPrime(7);
solution.isPrime(12);
solution.isPrime(23);