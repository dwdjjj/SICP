// 파이구하기?
function inc(x) {
  return x + 1;
}
function is_even(n) {
  return n % 2 === 0;
}
function product_r(a, b, term, next) {
  return a > b ? 1 : term(a) * find_PI_r(next(a), b, term, next);
}
function product_i(a, b, term, next) {
  function iter(a, res) {
    return a > b ? res : iter(next(a), term(a) * res);
  }
  return iter(a, 1);
}

// 2 4 4 6 6 8 8 .. 2n
// 1 3 3 5 5 7 7 .. 2n-1
function PI_i(n) {
  function numerator(x) {
    return is_even(x) ? x : x + 1;
  }
  function denominator(x) {
    return x === 1 ? 1 : is_even(x) ? x + 1 : x;
  }
  function term(x) {
    return numerator(x) / denominator(x);
  }
  return product_i(1, n, term, inc) * 2;
}

console.log(PI_i(1000));
// console.log(PI_i(10000)); 이거부턴 RangeError: Maximum call stack size exceeded에러뜸
// 검색해보니까 무한루프도는거같은데 왜..?
