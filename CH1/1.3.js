function BigSum(x, y, z) {
  return x < y && x < z
    ? y * y + z * z
    : y < x && y < z
    ? x * x + z * z
    : x * x + y * y;
}

console.log(BigSum(4, 3, 2));
