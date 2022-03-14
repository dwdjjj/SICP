// SICP JS 1.2.3

function abs(x) {
  return x >= 0 ? x : -x;
}

function cube(x) {
  return x * x * x;
}
function p(x) {
  return 3 * x - 4 * cube(x);
}
function sine(angle) {
  // 각도의 절댓값이 0.1보다 크면 p돌림
  return !(abs(angle) > 0.1) ? angle : p(sine(angle / 3));
}

console.log(sine(12.25));
//a. 12.25 -> 4.07 -> 1.35 -> 0.41 -> 0.13 -> 0.04 => 5번 p돌림(3으로 나눔)

//b. ??
