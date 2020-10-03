// filter(arr) // returns arr...
function FilterArr(func, arr) {
  const newArr = [];

  for (index in arr) {
    if (func(arr[index]) === true) {
      newArr.push(arr[index]);
    }
  }

  return newArr;
}

const arr = [1, 2, 3];

console.log(FilterArr((item) => item < 3, arr)); //[1,2]

let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
  
  // возвращает массив, состоящий из двух первых пользователей
  let someUsers = FilterArr(item => item.id < 3, users);
  console.log(someUsers); // { id: 1, name: 'Вася' }, { id: 2, name: 'Петя' } ]
  console.log(someUsers.length); // 2