// Давайте произведём 5 операций с массивом.

// 1.Создайте массив styles с элементами «Джаз» и «Блюз».
// 2.Добавьте «Рок-н-ролл» в конец.
// 3.Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// 4.Удалите первый элемент массива и покажите его.
// 5.Вставьте «Рэп» и «Регги» в начало массива.
// 6.Массив по ходу выполнения операций:

// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

//1
const style = ["Джаз", "Блюз"];
//2
style.push("Рок-н-ролл");
//3
const changeMiddleOfArray = (arr, value) => {
  if (arr.length % 2 === 0) {
    arr[arr.length / 2] = value;
  } else {
    arr[Math.floor(arr.length / 2)] = value;
  }
};
//4
console.log(style.shift());
//5
style.unshift("Рэп", "Регги");

// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

const sumInput = () => {
  const arrOfNumber = [];

  while (true) {
    let newValue = prompt("Number, please", "");
    if (newValue === "" || newValue === null || !isFinite(newValue) === true) {
      break;
    }
    arrOfNumber.push(+newValue);
  }

  let sumArr = 0;
  for (let number of arrOfNumber) {
    sumArr += number;
  }
  return alert(sumArr);
};

//На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

// Функция getMaxSubSum(arr) должна возвращать эту сумму.

// Например:

// getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
// getMaxSubSum([2, -1, 2, 3, -9]) = 6
// getMaxSubSum([-1, 2, 3, -9, 11]) = 11
// getMaxSubSum([-2, -1, 1, 2]) = 3
// getMaxSubSum([100, -9, 2, -3, 5]) = 100
// getMaxSubSum([1, 2, 3]) = 6 (берём все)
// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

// getMaxSubSum([-1, -2, -3]) = 0

const getMaxSubSum = (arr) => {
  let maxSum = 0;
  let currentNum = 0;

  for (let number of arr) {
    currentNum += number;
    maxSum = Math.max(maxSum, currentNum);
    if (currentNum < 0) {
      currentNum = 0;
    }
  }
  return maxSum;
};
