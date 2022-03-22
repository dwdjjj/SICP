// function sum(term, a, next, b) {
//   function iter(a, result) {
//       return __
//              ? __
//              : iter(__, __);
//   }
//   return iter(__, __);
// }

// 선형재귀 프로세스인데, 반복으로 만들기

function inc(n) {
  return n + 1;
}
function cube(x) {
  return x * x * x;
}
function square(x) {
  return x * x;
}

// 함수에 함수인자로 넣기
function sum_iter(a, b, term, next) {
  function iter(a, res) {
    return a > b ? res : iter(next(a), res + term(a));
  }
  return iter(a, 0);
}

console.log(sum_iter(1, 3, square, inc));
console.log(sum_iter(1, 4, cube, inc));
