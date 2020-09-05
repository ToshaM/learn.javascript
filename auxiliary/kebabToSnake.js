const str = "hey-people-hello-to-you";

const kebabToSnake = (str) => {
  let snakeStr = "";
  let i = 0;

  for (i = 0; i < str.length; i += 1) {
    console.log(str[i]);
    if (str[i] === "-") {

      snakeStr += str[i + 1].toLocaleUpperCase();
    } else {
      snakeStr += str[i];
    }
  }

  return snakeStr;
};

console.log(kebabToSnake(str));
