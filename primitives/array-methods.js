"use strict";
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

const camelize = (str) => {
  return str
    .split("-") // разбивает 'my-long-word' на массив ['my', 'long', 'word']
    .map(
      // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
      // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
      (word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(""); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
};

///////////////////

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
// Функция должна возвращать новый массив и не изменять исходный.

// Например:
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (совпадающие значения)
// alert( arr ); // 5,3,8,1 (без изменений)

const filterRange = (arr, a, b) => {
  return arr.filter((item) => a <= item && item <= b);
};

/////////////////

//  Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех,
//которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.

// Например:
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
// alert( arr ); // [3, 1]

const filterRangeInPlace = (arr, a, b) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (a <= arr[i] <= b) {
      arr.splice(i, 1);
    }
  }
};
/////////////////

//Сортировка по убыванию

// let arr = [5, 2, 1, -10, 8];
// alert( arr ); // 8, 5, 2, 1, -10

const descendingSort = (arr) => {
  arr.sort((a, b) => b - a);
};

/////////////////

// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

const copySorted = (arr) => {
  const copyArr = arr.concat();
  copyArr.sort();
  return copyArr;
};

/////////////////
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей.
// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате
// «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
// Пример использования:

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает
// оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

// Например, давайте добавим умножение *, деление / и возведение в степень **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.

function Calculator() {
  this.method = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };
  this.calculate = function (str) {
    const arrStr = str.split(" ");
    const a = +arrStr[0];
    const b = +arrStr[2];
    const mark = arrStr[1];

    if (!isNaN(mark) || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.method[mark](a, b);
  };

  this.addMethod = function (name, func) {
    this.method[name] = func;
  };
}
/////////////////
// У вас есть массив объектов user, и в каждом из них есть user.name.
//Напишите код, который преобразует их в массив имён.

// Например:

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];
// /////1 - способ (длинный)
const us = (arr) => {
  const arrNames = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].name) {
      arrNames.push(arr[i].name);
    }
  }
  return arrNames;
};
let name = us(users);
// ////2 - способ (короткий)
let name = users.map((item) => item.name);

/////////////////

// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName,
//  где fullName – состоит из name и surname.

// Например:

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = /* ... ваш код ... */

// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин
// Итак, на самом деле вам нужно трансформировать один массив объектов в другой. Попробуйте использовать =>. Это небольшая уловка.

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map((item) => ({
  fullName: `${item.name} ${item.surname}`,
  id: item.id,
}));
//подсмотрел решение

/////////////////
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

// Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];
const sortByAge = (arr) => {
  return arr.sort((a, b) => a.age - b.age);
};
sortByAge(arr);

// теперь: [vasya, masha, petya]

/////////////////
// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом)
// элементы массива.
// Многократные прогоны через shuffle могут привести к разным последовательностям элементов.
// Например:

// let arr = [1, 2, 3];

// // // shuffle(arr);
// // // // arr = [3, 2, 1]

// // // shuffle(arr);
// // // // arr = [2, 1, 3]

// // // shuffle(arr);
// // // // arr = [3, 1, 2]
// // // ...
// Все последовательности элементов должны иметь одинаковую вероятность.
// Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д.,
//  с равной вероятностью каждого случая.

// parseInt(min + Math.random() * (max - min));

const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
};

/*
Алгоритм  "Тасование Фишера — Йетса":

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

    // поменять элементы местами
    // мы используем для этого синтаксис "деструктурирующее присваивание"
    // подробнее о нём - в следующих главах
    // то же самое можно записать как:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}
*/

/////////////////

// Напишите функцию getAverageAge(users), которая принимает
// массив объектов со свойством age и возвращает средний возраст.

// Формула вычисления среднего арифметического
// значения: (age1 + age2 + ... + ageN) / N.

// Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
//////// 1 - способ
const getAverageAge = (arr) => {
  const ageArr = arr.map((item) => item.age);
  let sumAge = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sumAge += ageArr[i];
  }

  return sumAge / arr.length;
};
/////// 2 - способ
const getAverageAge = (arr) => {
    return arr.reduce((sum, index) => sum + index.age, 0) / arr.length;
}

/////////////////

// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив,
// содержащий только уникальные элементы arr.

// Например:

let strings = [
    "кришна",
    "кришна",
    "харе",
    "харе",
    "харе",
    "харе",
    "кришна",
    "кришна",
    ":-O",
  ];
  
  // alert( unique(strings) ); // кришна, харе, :-O
  
  const unique = (arr) => {
    const uniqueArr = [];
    for (let item of arr) {
      if (!uniqueArr.includes(item)) {
        uniqueArr.push(item);
      }
    }
    return uniqueArr;
  };
  
  /////////////////