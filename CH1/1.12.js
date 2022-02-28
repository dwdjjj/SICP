function paskal(y, x) {
  return y < x
    ? false
    : y === x || x === 1
    ? 1
    : paskal(y - 1, x - 1) + paskal(y - 1, x);
}

console.log(paskal(4, 2));
