class Solution {
  calculateGCD(A, B) {
    // Euclidean Algorithm
    // A = 0, GCD(A, B) = GCD(0, B) = B
    // B = 0, GCD(A, B) = GCD(A, 0) = A
    // Quotient Remainder Form: A = B * Q + R (Q for Quotient; R for Remainder)
    // GCD(A,B) = GCD(B, R)
    
    // Example for GCD(12, 18)
    // GCD(12, 18)
    // GCD(18, 12)
    // GCD(12, 6)
    // GCD(6, 0)
    
    if (B === 0) {
      return A;
    }
    
    return this.calculateGCD(B, A % B);
  }       
}

const solution = new Solution();

solution.calculateGCD(12, 18);
solution.calculateGCD(25, 15);
solution.calculateGCD(40, 60);