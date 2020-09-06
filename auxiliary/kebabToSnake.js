const str = "hey-people-hello-to-you";

//kebabToSnake is WRONG name! right name is 'kebabToCamel;

const kebabToCamel = (str) => {
  let camelStr = "";
  let i = 0;
  let flag = false;

  for (; i < str.length; i += 1) {
    if (str[i] === "-" && i !== 0) {
      flag = true;
    } else if (str[i] === "-" && i == 0) {
      flag = false;
    } else if (flag === true) {
      camelStr += str[i].toLocaleUpperCase();
      flag = false;
    } else {
      camelStr += str[i];
    }
  }

  return camelStr;
};

console.log(kebabToCamel(str));
const test1 = kebabToCamel("hello-there-people");
const test2 = kebabToCamel("-haha-hoho");
const test3 = kebabToCamel("-magic-is-not-allowed-");

console.log("hello-there-people becomes... :", test1);
console.log("-haha-hoho becomes... :", test2);
console.log("-magic-is-not-allowed- becomes... :", test3);
