// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete name.user;

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

const isEmpty = (obj) => {
  for (key in obj) {
    return false;
  }

  return true;
};

let schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false

//Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const user = {
  name: "John",
};

// это будет работать?
user.name = "Pete";

// ОТВЕТ: Да, будет работать.

//У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

//   Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

const sumSalaries = (obj) => {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
};

console.log(sumSalaries(salaries));

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};



// после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu",
// };

const multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
};

console.log(menu);
multiplyNumeric(menu);
console.log(menu);