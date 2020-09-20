/////////////////
// Есть объект salaries с произвольным количеством свойств,
// содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает
// сумму всех зарплат с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.

// Например:
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
// alert( sumSalaries(salaries) ); // 650

const sumSalaries = (obj) => {
  let sum = 0;

  if (Object.values(obj).length === 0) {
    return sum;
  }
  for (let value of Object.values(obj)) {
    sum += value;
  }

  return sum;
};

// console.log(sumSalaries(salaries)); //650

/////////////////

// Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: "John",
  age: 30,
};

// alert( count(user) ); // 2
// Постарайтесь сделать код как можно короче.
// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».

const count = (obj) => {
    return Object.values(obj).length;
};

// console.log(count(user)); // 2

/////////////////