// 1. a와 b사이에 있는 어떤 수열을 묶어가는 개념 곧, accumulate가 있다고 할 때,
// sum과 1.31에서 만든 product가 이 개념을 응용한 보기 가운데 하나임을 밝혀라
// (accumlate combiner null-value term a next b)
// accumlate는 이어지는 두값을 묶는 combiner프로시저와 null값을 인자로 받고, 나머지는
// 이전 예제와 동일. accumulate맏르고 sum, product를 acuumulate를 불러쓰는 프로시저도
// 짜봐라.
// 2. accumulate프로세스가 되돈다면 반복하도록, 반복한다면 되돌게 고쳐 봐라.

function term(x) {
  return x;
}
function next(x) {
  return x + 1;
}
// recursive
function accumulate_r(combiner, null_value, a, b, term, next) {
  return a > b
    ? null_value
    : combiner(
        term(a),
        accumulate_r(combiner, null_value, next(a), b, term, next)
      );
}
function sum_r(a, b, term, next) {
  function sum(x, y) {
    return x + y;
  }

  return accumulate_r(sum, 0, a, b, term, next);
}
console.log(sum_r(1, 10, term, next)); // 1 + 2 + 3 + ... + 10 되도는합

function product_r(a, b, term, next) {
  function multiply(x, y) {
    return x * y;
  }
  return accumulate_r(multiply, 1, a, b, term, next);
}
console.log(product_r(1, 5, term, next));

function accumulate_i(combiner, null_value, a, b, term, next) {
  function iter(a, res) {
    return a > b ? res : iter(next(a), combiner(res, term(a)));
  }
  return iter(a, null_value);
}

function sum_i(a, b, term, next) {
  function sum(x, y) {
    return x + y;
  }
  return accumulate_i(sum, 0, a, b, term, next);
}
console.log(sum_i(1, 10, term, next));

function product_i(a, b, term, next) {
  function multiply(x, y) {
    return x * y;
  }
  return accumulate_i(multiply, 1, a, b, term, next);
}
console.log(product_i(1, 5, term, next));
