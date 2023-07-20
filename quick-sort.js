function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const pivot = arr[arr.length - 1];
  const smaller = [];
  const equal = [];
  const larger = [];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      smaller.push(arr[i]);
    } else if (arr[i] === pivot) {
      equal.push(arr[i]);
    } else {
      larger.push(arr[i]);
    }
  }

  return [...quickSort(smaller), ...equal, ...quickSort(larger)];
}

const examples = [[4, 2, 6, 8, 3], [10, 5, 3, 7, 2, 8, 6], [1, 2, 3, 4, 5]];

for (let i = 0; i < examples.length; i++) {
  const array = examples[i];
  const sortedArray = quickSort(array);
  console.log(`Sorted Array #${i + 1}: ${sortedArray}`);
}