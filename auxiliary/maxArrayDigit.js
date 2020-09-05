const arr = [2, 4, 53, 5333, 33, 764, 3];

const maxArrayDigit = (arr) => {
  let max = 0;
  let i = 0;
  while (i < arr.length) {
    max = arr[i];
    const nextValue = arr[i + 1];
    if (nextValue && arr[i] < nextValue) {
      max = arr[i + 1];
      i += 1;
    } else {
      return max;
    }
  }
};

console.log(maxArrayDigit(arr));
