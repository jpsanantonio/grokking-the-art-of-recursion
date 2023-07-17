class Solution {
  decimalToBinary(decimal) {
    // 10 / 2 = 5 R 0
    // 5 / 2 = 2 R 1
    // 2 / 2 = 1 R 0
    // 1 / 2 = 0 R 1
    
    // Quotient Remainder Form:
    // A = B * Q + R
    // Q = (A - R) / B
    // Q = (A - (A % B)) / B
    // Q = (A - (A % 2)) / 2
    
    if (decimal === 0) {
      return '';
    }
    
    const remainder = decimal % 2;
    const quotient = (decimal - remainder) / 2;
    
    return  this.decimalToBinary(quotient) + remainder.toString();
  }
}

const solution = new Solution();

solution.decimalToBinary(10);
solution.decimalToBinary(27);
solution.decimalToBinary(5);