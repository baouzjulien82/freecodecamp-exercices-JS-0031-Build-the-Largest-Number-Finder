// version initiale

const largestOfAll = (arrayOfArrays) => {
  let maxArrayValues = [];
  arrayOfArrays.forEach(array => {
    maxArrayValues.push(Math.max(...array))
  });
  return maxArrayValues;
};

console.log(largestOfAll([[1,2,3],[4,5,6],[7,8,9]]));
