class Solution {
  isPerfectSquare(num) {
    return this.checkPerfectSquare(num, 0, num);
  }
  
  checkPerfectSquare(num, low, high) {   
    if (low > high) {
      return false;
    }
    
    const mid = Math.floor((low + high) / 2);
    
    if (mid * mid === num) {
      return true;
    }
    
    if (mid * mid > num) {
      return this.checkPerfectSquare(num, low, mid - 1);
    }
    
    return this.checkPerfectSquare(num, mid + 1, high); 
  }
}

const solution = new Solution();

solution.isPerfectSquare(16);
solution.isPerfectSquare(14);
solution.isPerfectSquare(9);