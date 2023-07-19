class Solution {
  countOccurrences(arr, key) {
    return this.countOccurrencesHelper(arr, key, 0);
  }
  
  countOccurrencesHelper(arr, key, index) {
    if (index >= arr.length) {
      return 0
    }
    
    const counter = arr[index] === key ? 1 : 0;
    
    return counter + this.countOccurrencesHelper(arr, key, index + 1);
  }
}

const solution = new Solution();

solution.countOccurrences([2, 4, 6, 8, 4], 4);
solution.countOccurrences([1, 3, 5, 7, 9], 2);
solution.countOccurrences([1, 2, 2, 2, 3], 2);
