/////////////////
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Например:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте три варианта решения:

// С использованием цикла.
const sumTo = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i += 1) {
    sum += i;
  }
  return sum;
};

// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
const sumTo = (n) => {
  return n === 0 ? n : n + sumTo(n - 1);
};

// С использованием формулы арифметической прогрессии.
const sumTo = (n) => {
  return (n * (n + 1)) / 2;
};

console.log(sumTo(1)); // 1
console.log(sumTo(2)); // 3
console.log(sumTo(3)); // 6
console.log(sumTo(4)); // 10
console.log(sumTo(100)); // 5050

/////////////////
// Факториал натурального числа – это число, умноженное
// на "себя минус один", затем на "себя минус два", и так
// далее до 1. Факториал n обозначается как n!

// Определение факториала можно записать как:

// n! = n * (n - 1) * (n - 2) * ...*1
// Примеры значений для разных n:

// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

// alert( factorial(5) ); // 120
// P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6

const factorial = (n) => {
  return n === 1 ? 1 : n * factorial(n - 1);
};

/////////////////
// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2.
// То есть, следующее число получается как сумма двух предыдущих.

// Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и
// так далее: 1, 1, 2, 3, 5, 8, 13, 21....

// Числа Фибоначчи тесно связаны с золотым сечением и множеством природных
// явлений вокруг нас.

// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

// Пример работы:

const memo = (fn) => {
  const cache = {};

  const memoized = (x) => {
    if (cache[x]) {
      return cache[x];
    }

    const result = fn(x, memoized);
    cache[x] = result;
    return result;
  };

  return memoized;
};

const slowFib = (x, memoFn) => {
  if (x < 2) {
    return x;
  }

  if (memoFn && typeof memoFn === "function") {
    return memoFn(x - 1) + memoFn(x - 2);
  } else {
    return slowFib(x - 1) + slowFib(x - 2);
  }
};

const fibMemo = memo(slowFib);

console.log(fibMemo(3)); // 2
console.log(fibMemo(7)); // 13
console.log(fibMemo(77)); // 5527939700884757

// P.S. Все запуски функций из примера выше должны работать быстро.
// Вызов fib(77) должен занимать не более доли секунды.

/////////////////
// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
// Напишите функцию printList(list), которая выводит элементы списка по одному.

// Сделайте два варианта решения: используя цикл и через рекурсию.

const printList = (list) => {
  let current = list;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
};
//
const printList = (list) => {
  console.log(list.value);

  if (list.next) {
    printList(list.next);
  }
};

/////////////////

// Выведите односвязный список из предыдущего задания
// Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.

const printReverseList = (list) => {
  let arrList = [];
  let current = list;
  while (current) {
    arrList.unshift(current.value);
    current = current.next;
  }
  for (let value of arrList) {
    console.log(value);
  }
};
//
const printReverseList = (list) => {
  if (list.next) {
    printReverseList(list.next);
  }
  console.log(list.value);
};
/////////////////
