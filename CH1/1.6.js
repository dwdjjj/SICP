// 뉴턴메서드로 제곱근 구하는 프로시저 짜기

function abs(x) {
  return x >= 0 ? x : -x;
}

function square(x) {
  return x * x;
}

function average(x, y) {
  return (x + y) / 2;
}

function improve(guess, x) {
  return average(guess, x / guess);
}

function is_good_enough(guess, x) {
  return abs(square(guess) - x) < 0.001;
}

function sqrt_iter(guess, x) {
  return is_good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x);
}

// console.log(sqrt_iter(3, 25));
// 결과 : 5.000000002328306
// console.log(sqrt_iter(0.01, 0.0001));

function conditional(predicate, then_clause, else_clause) {
  return predicate ? then_clause : else_clause;
}
console.log(conditional(2 === 3, 0, 5));

function sqrt_iter(guess, x) {
  return conditional(
    is_good_enough(guess, x),
    guess,
    sqrt_iter(improve(guess, x), x)
  );
}

console.log(sqrt_iter(3, 25));

// 무한루프?
