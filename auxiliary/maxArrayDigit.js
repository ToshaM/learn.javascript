const arr1 = [2, 4, 53, 5333, 33, 764, 3]; 
const arr2 = [-3, 5];
const arr3 = [0, 22, 17, -9]; 
const arr4 = [-22, -100, 1]; 
const arr5 = [-22, -100, -1]; 

const maxArrayDigit = (arr) => {
  let i = 0;
  let max = arr[i];
  for (; i < arr.length;  i += 1) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max
};

console.log(maxArrayDigit(arr1));//5333
console.log(maxArrayDigit(arr2));// 5
console.log(maxArrayDigit(arr3));//22
console.log(maxArrayDigit(arr4));//1
console.log(maxArrayDigit(arr5));//-1
