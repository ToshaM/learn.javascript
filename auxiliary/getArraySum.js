const arr = [22, 34, 321, 33, 15, 222];

const getArraySum = (arr) => {
  let arraySum = 0;
  let i = 0;

  while (i < arr.length) {
    arraySum += arr[i];
    i += 1;
  }

  return arraySum;
};

console.log(getArraySum(arr));
