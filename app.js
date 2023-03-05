function* pseudoRandom(seed) {
  while (true) {
    seed = seed * 16807 % 2147483647
    yield seed
  }
}

let result = pseudoRandom(1)

console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);