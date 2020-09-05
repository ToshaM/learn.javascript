const smallestDivisor = (num) => {
  if (num === 1) {
    return num;
  }

  const iter = (curent, acc) => {
    if (num % curent === 0) {
      return curent;
    }
    return iter((curent += 1), acc * curent);
  };
  return iter(2, 1);
};

console.log(smallestDivisor(3)); //3
console.log(smallestDivisor(4)); //2
console.log(smallestDivisor(8)); //2
console.log(smallestDivisor(17)); //17
console.log(smallestDivisor(15)); //3
console.log(smallestDivisor(121)); //11
