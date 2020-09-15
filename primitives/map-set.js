// Допустим, у нас есть массив arr.
// Создайте функцию unique(arr), которая вернёт массив уникальных, 
//не повторяющихся значений массива arr.

// Например:

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

const unique = (arr) => {
    const uniqueSet = new Set(arr);
    const uniqueArr = [];
    for (let value of uniqueSet) {
        uniqueArr.push(value)
    }
    return uniqueArr;
}
//красивое решение

/*
function unique(arr) {
    return Array.from(new Set(arr));
  }
*/

/////////////////

// Анаграммы – это слова, у которых те же буквы в том же количестве,
//  но они располагаются в другом порядке.

// Например:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

// Например:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

const aclean = (arr) => {
    let map = new Map();

  for (let word of arr) {
    // разбиваем слово на буквы, сортируем и объединяем снова в строку
    let sorted = word.toLowerCase().split("").sort().join(""); // 
//     let sorted = arr[i] // PAN
//   .toLowerCase() // pan
//   .split("") // ["p","a","n"]
//   .sort() // ["a","n","p"]
//   .join(""); // anp
    map.set(sorted, word);
  }

  return Array.from(map.values());
}
console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

/////////////////

