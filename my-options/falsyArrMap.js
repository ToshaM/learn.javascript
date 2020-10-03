// map(arr); // returns arr, по которому прошлись мапом
/////////////////
//через цикл
function MapArr(func, arr) {
  const newArr = [];

  for (index of arr) {
    newArr.push(func(index));
  }

  return newArr;
}

const arr = [1, 2, 3];

const doubleInd = (index) => {
  return index * 2;
};

console.log(MapArr(doubleInd, arr)); //[2,4,6]

//через рекурсивный процесс

function MapArr(func, arr) {
  let index = arr.length - 1;
  const newArr = [];

  const returnNewArr = (ind) => {
    if (ind < 0) {
      return newArr;
    } else {
      newArr.unshift(func(arr[ind]));
      returnNewArr(ind - 1);
    }
  };

  returnNewArr(index);

  return newArr;
}

const arr = [1, 2, 3];

const doubleInd = (index) => {
  return index * 2;
};

console.log(MapArr(doubleInd, arr)); //[2,4,6]

//через итеративный процесс
function MapArr(func, arr) {
  let index = arr.length - 1;
  const newArr = [];

  const returnNewArr = (ind, acc) => {
    if (acc > ind) {
      return newArr;
    } else {
      newArr.push(func(arr[acc]));
      returnNewArr(ind, acc + 1);
    }
  };

  returnNewArr(index, 0);

  return newArr;
}

const arr = [1, 2, 3];

const doubleInd = (index) => {
  return index * 2;
};

console.log(MapArr(doubleInd, arr)); //[2,4,6]

/////////////////
