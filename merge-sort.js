function mergeSort(arr) {
  divide(arr, 0, arr.length - 1);
}

function divide(arr, start, end) {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);
    
    divide(arr, start, mid);
    divide(arr, mid + 1, end);
    merge(arr, start, mid, end);
  }
}

function merge(arr, start, mid, end) {
  const leftSize = mid - start + 1;
  const rightSize = end - mid;
  
  const left = new Array(leftSize);
  const right = new Array(rightSize);
  
  for (let i = 0; i < leftSize; i++) {
    left[i] = arr[start + i];
  }
  
  for (let j = 0; j < rightSize; j++) {
    right[j] = arr[mid + 1 + j];
  }
  

  let i = 0;
  let j = 0;
  let k = start;
  
  while (i < leftSize && j < rightSize) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    
    k++;
  }
  
  while (i < leftSize) {
    arr[k] = left[i];
    i++;
    k++;
  }
  
  while (j < rightSize) {
    arr[k] = right[j];
    j++;
    k++;
  }
}

const arr1 = [5, 2, 8, 3, 1, 6];
mergeSort(arr1);
console.log(arr1);

const arr2 = [9, 4, 7, 2, 1];
mergeSort(arr2);
console.log(arr2);

const arr3 = [3, 1, 2, 5, 4];
mergeSort(arr3);
console.log(arr3);