// Задача 1
// Написать функцию sumRange(n)
// Принимает положительное число n больше 0 и считает сумму от 1-го до n включительно.

// Пример
// sumRange(5) // 15 
// sumRange(4) // 10

// решить с помощью рекурсивного и итеративного процессов.

//Рекурсивный процесс

const sumRange = (n) => {
  if (n === 1) {
    return n;
  } else if (n < 0) {
      return NaN
  }

  return n + sumRange(n - 1); // 5 + (4 + (3 + (2 + (1))))

};

console.log(sumRange(5));
console.log(sumRange(4));

//Итеративный процесс

const sumRange = (n) => {
    if (n === 1) {
        return n
    } else if (n < 0) {
        return NaN
    }

    const iter = (count, acc) => {
        if (count === 1) {
            return acc
        }
        return iter(count - 1, acc + count)// (5, 1)+ (4, 6(+ 3, 10)+ 2, 13 (1, 15)) 
    }

  return  iter(n, 1);
}

console.log(sumRange(5));
console.log(sumRange(4));