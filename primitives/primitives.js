"use strict";
// Взгляните на следующий код:

let str = "Привет";

str.test = 5;

console.log(str.test);
// Как вы думаете, это сработает? Что выведется на экран?

//выведится ошибка. 
//без use strict, выводится undefined
