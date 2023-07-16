class Solution {
  calculateFactorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    }
    
    return number * this.calculateFactorial(number - 1);
  }
}

const solution = new Solution();

solution.calculateFactorial(5);
solution.calculateFactorial(7);
solution.calculateFactorial(1);