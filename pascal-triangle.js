function generatePascalTriangle(numRows) {
  if (numRows === 0) {
    return [];
  }
  
  if (numRows === 1) {
    return [[1]];
  }
  
  const triangle = generatePascalTriangle(numRows - 1);
  const previousRow = triangle[numRows - 2];
  const currentRow = [1];
  
  for (let i = 1; i < numRows - 1; i++) {
    currentRow.push(previousRow[i - 1] + previousRow[i]);
  }
  
  currentRow.push(1);
  triangle.push(currentRow);
  
  return triangle;
}

generatePascalTriangle(3);
generatePascalTriangle(5);
generatePascalTriangle(1);
generatePascalTriangle(10);