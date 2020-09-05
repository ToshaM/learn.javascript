const arr = [22, 34, 321, 33, 15, 222];

const printReverse = arr => {
    let reverseArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        reverseArr.unshift(arr[i]);
    }
    return reverseArr;
}

console.log(printReverse(arr));