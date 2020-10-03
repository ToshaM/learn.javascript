/////////////////
// Измените код makeCounter() так, чтобы счётчик мог увеличивать
// и устанавливать значение:

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.

function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = (value) => {
    return (count = value);
  };

  counter.decrease = () => {
    return count--;
  };

  return counter;
}
/////////////////
// Напишите функцию sum, которая бы работала следующим образом:

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15

function sum(a) {
    let currentSum = a;
  
    function f(b) {
      currentSum += b;
      return f;
    }
  
    f.toString = function () {
      return currentSum;
    };
  
    return f;
  }
  
  console.log(sum(1)(2)); // 3
  console.log(sum(1)(2)(3)); // 6
  console.log(sum(5)(-1)(2)); // 6
  console.log(sum(6)(-1)(-2)(-3)); // 0
  console.log(sum(0)(1)(2)(3)(4)(5)); //15
  
  //при вызове в консоле браузера возвращает верное число
  //при вызове в vscode возвращает [Function: f] { toString: [Function] }