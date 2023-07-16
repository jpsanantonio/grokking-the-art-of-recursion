class Solution {
  calculateSum(N) {
    if (N === 0) {
      return 0;
    }

    return N + this.calculateSum(N - 1);
  }
}

const solution = new Solution();
solution.calculateSum(1);
solution.calculateSum(2);
solution.calculateSum(3);
