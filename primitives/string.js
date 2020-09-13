// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
//Например: ucFirst("вася") == "Вася";

const ucFirst = (str) => {
  let ucString0 = "";
  ucString1 = str.trim();

  console.log();

  ucString0 = ucString1[0].toUpperCase() + ucString1.slice(1);

  return ucString0;
};

let str1 = "вася";
let str2 = " петя";

console.log(ucFirst(str1));
console.log(ucFirst(str2));

// // ---------------
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:

const checkSpam = (str) => {
  let checkSpam = "";

  checkSpam = str.toLowerCase();

  if (checkSpam.includes("viagra") || checkSpam.includes("xxx")) {
    return console.log(true);
  } else {
    return console.log(false);
  }
};

checkSpam("buy ViAgRA now"); // true;
checkSpam("free xxxxx"); // true;
checkSpam("innocent rabbit"); // false;

// // -------------

const checkSpam = (str) => {
  let lowerCaseStr = str.toLowerCase();
  if (
    lowerCaseStr.indexOf("viagra", 0) !== -1 ||
    lowerCaseStr.indexOf("xxx", 0) !== -1
  ) {
    return console.log(true);
  } else {
    return console.log(false);
  }
};


checkSpam("buy ViAgRA now"); // true;
checkSpam("free xxxxx"); // true;
checkSpam("innocent rabbit"); // false;

// // -------------

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength,
//заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

const truncate = (str, maxlength) => {
  let newStr;

  if (maxlength < str.length) {
    return (newStr = str.slice(0, maxlength - 1) + "...");
  } else {
    return str;
  }
};

// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)); //"Вот, что мне хотело…"
// console.log(truncate("Всем привет!", 20)); //"Всем привет!"

// // -------------

// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

const extractCurrencyValue = (str) => {
  let priceStr = str.slice(1);

  return +priceStr;
};

console.log(extractCurrencyValue("$120") === 120); // true

// // --------------
