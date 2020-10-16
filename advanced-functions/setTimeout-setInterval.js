/////////////////
// Напишите функцию printNumbers(from, to), которая
// выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.

const printNumbers = (from, to) => {
  let currentNumber = from;
  let timer = setInterval(() => {
    console.log(currentNumber);
    currentNumber++;
    if (currentNumber > to) {
      clearInterval(timer);
    }
  }, 1000);
  return timer;
};

printNumbers(2, 5);

// Используя рекурсивный setTimeout.

const printNumbers = (from, to) => {
  let currentNumber = from;
  let timer = setTimeout(function run() {
    if (currentNumber > to) {
      clearTimeout(timer);
    } else {
      console.log(currentNumber);
      currentNumber++;
      setTimeout(run, 1000);
    }
  }, 1000);

  return timer;
};

printNumbers(2, 5);

/////////////////