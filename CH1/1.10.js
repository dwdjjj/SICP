function A(x, y) {
  return y === 0 ? 0 : x === 0 ? 2 * y : y === 1 ? 2 : A(x - 1, A(x, y - 1));
}

console.log(A(1, 10)); // 1024 = 2의 10승
console.log(A(2, 4)); // 65536 = 2의 16승
console.log(A(3, 3)); // 65536

function f(n) {
  return A(0, n);
}
function g(n) {
  return A(1, n);
}
function h(n) {
  return A(2, n);
}
function k(n) {
  return 5 * n * n;
}
console.log(k(4)); // 80
// k(n) : 5 * n * n
// A(0, n) : 2 * n
// A(1, n) : 2의 n승(n제곱)
// A(2, n) : 2의 2제곱연산을 n번
