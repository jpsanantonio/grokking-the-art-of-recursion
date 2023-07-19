function binarySearch(arr, key) {
  return binarySearchHelper(arr, key, 0 , arr.length);
}

function binarySearchHelper(arr, key, low, high) {
  if (arr.length === 0) {
    throw new Error("Parameter arr is empty");
  }
  
  if (low > high) {
    return false;
  }
  
  const mid = Math.floor((low + high) / 2);
  
  if (arr[mid] === key) {
    return true;
  } else if (arr[mid] > key) {
    return binarySearchHelper(arr, key, low, mid - 1);
  } else if (arr[mid] < key) {
    return binarySearchHelper(arr, key, mid + 1, high);
  }
}

binarySearch([], 4);
binarySearch([1, 2, 3, 4, 5], 4);
binarySearch([2, 4, 6, 8, 10], 5);
binarySearch([3, 6, 9, 12, 15], 15);