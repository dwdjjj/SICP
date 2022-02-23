function f(n) {
  return n < 3 ? n : f(n - 1) + 2 * f(n - 2) + 3 * f(n - 3);
}
console.log(f(5));

function f2(n) {
  return n < 3 ? n : f2_iter(2, 1, 0, n - 2);
}
function f2_iter(a, b, c, cnt) {
  return cnt === 0 ? a : f2_iter(a + 2 * b + 3 * c, a, b, cnt - 1);
}

console.log(f2(5));
