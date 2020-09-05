const arr = [1, 2, 4, 77, 5, 3, 8, 10];

// вопрос 1: что делает моя функция ? считает? получает ? изменяет? создает? и т. д.
function getSquaresOfEven(arr) {
  // вопрос 2: данные какого типа мне надо вернуть ? Чем является мой результат ?
  let result = []; 

  for (let i = 0; i < arr.length; i += 1) {
    const currentValue = arr[i]; // поясняющая переменная 
    if (currentValue % 2 === 0) {
      const squaredValue = currentValue * currentValue;

    //   result[i] = squaredValue;
    //   result.push(squaredValue);
      result = [...result, squaredValue];
    } else {
      result[i] = currentValue;
    }
  }

  return result;
}

const result = getSquaresOfEven(arr);

console.log(result);

// result [1, 4, 16, ...]

let str = 'haha';
str = 'hahaha';




