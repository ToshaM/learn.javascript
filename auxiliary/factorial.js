// factorial 5
// 1 * 2 * 3 * 4 * 5
// 5!


const factorial = num => {
    let result = 1;
    let savedNum = num;

    let i = 1;
    while(i < num) {
        result = savedNum * result;  
        savedNum -= 1;
        i += 1;

        console.log(i);
    }


    return result;
}

// console.log(factorial(5));

// result = savedNum * result;  // first iteration 5 * 1 = 5; i = 1; savedNum = 4
// result = savedNum * result;  // second 4 * 5 = 20; i = 2; savedNum = 3
// result = savedNum * result;  // third 20 * 3 = 60; i = 3; savedNum = 2
// result = savedNum * result;  // fourth 60 * 2 = 120; i = 4; savedNum = 1;
// result = savedNum * result;  // fifth 120 * 1 = 120; i = 5; savedNum = 0;


// РЕКУРСИВНЫЙ ПРОЦЕСС ЗАСТАВЛЯЕТЬ РАСТИ STACK!!! ИСПОЛЬЗУЕТСЯ ПАМЯТЬ
// 2 шага рекурсии
// 1 - терминтальный случай (когда надо остановиться ???)
// 2 - как изменить следующий рекурсивный вызов, чтобы приблизиться к терминальному случаю ?
const factorialRecursion = num => {
    if (num === 1) {
        return num;
    };
    return num * factorialRecursion(num - 1);
}

// console.log(factorialRecursion(5));

// const factRecShort = num => num === 1 ? num : num * factRecShort(num - 1);



// CALL factorialRecursion - 1 (FC1)
// STACK: prepare for saving first call
// num = 5

// CALL factorialRecursion - 2 (FC2)
// STACK: SAVED FC1 + prepare for saving FC2
// num = 4

// CALL factorialRecursion - 3 (FC3)
// STACK: SAVED FC2 + prepare for saving FC3
// num = 3

// CALL factorialRecursion - 4 (FC4)
// STACK: SAVED FC3 + prepare for saving FC4
// num = 2

// CALL factorialRecursion - 5 (FC5)
// STACK: SAVED FC4 -----> return 1 to FC4, because num === 1
// num = 1


// *******

// factorialRecursion(5)
// (5 * factorialRecursion(4))
// (5 * factorialRecursion(4 * factorialRecursion(3)))
// (5 * factorialRecursion(4 * factorialRecursion(3 * factorialRecursion(2)))
// (5 * factorialRecursion(4 * factorialRecursion(3 * factorialRecursion(2 * factorialRecursion(1))))
// (5 * factorialRecursion(4 * factorialRecursion(3 * factorialRecursion(2 * 1)))
// (5 * factorialRecursion(4 * factorialRecursion(3 * 2)))
// (5 * factorialRecursion(4 * 6))
// (5 * 24)

const factIterative = num => {

    const iter = (acc, next) => {
        if (next === num) {
            return acc * next;
        }
        return iter(acc * next, next += 1); // все вычисления делаю внутри аргументов функции
    }
    
    return iter(1, 1);

   
}

console.log(factIterative(5));


