function smallest_divisor(n) {
  return find_divisor(n, 2);
}
function find_divisor(n, test_divisor) {
  return square(test_divisor) > n
    ? n
    : divides(test_divisor, n)
    ? test_divisor
    : find_divisor(n, test_divisor + 1);
}
function is_prime(n) {
  return n === smallest_divisor(n);
}

function divides(a, b) {
  return b % a === 0;
}
function square(x) {
  return x * x;
}
function inc(n) {
  return n + 1;
}
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
function sum(x, y) {
  return x + y;
}

// 되도는프로세스
function filter_accumulate(combiner, a, b, null_value, term, next, filter) {
  return a > b
    ? null_value
    : combiner(
        filter(a) ? term(a) : null_value,
        filter_accumulate(combiner, next(a), b, null_value, term, next, filter)
      );
}

function sum_square_of_primes(a, b) {
  return filter_accumulate(sum, a, b, 0, square, inc, is_prime);
}

console.log(sum_square_of_primes(1, 5)); // 1 + 4 + 9 + 25

// n과 서로소인 수. i < n, 0보다 큰 정수 i -> gcd(i, n)이 1이 되는 0~n 자연수 곱
function relative_prime_product(n) {
  function multiply(x, y) {
    return x * y;
  }
  function term(x) {
    return x;
  }
  function test(i) {
    return gcd(i, n) === 1;
  }
  return filter_accumulate(multiply, 1, term, 1, inc, n, test);
}
