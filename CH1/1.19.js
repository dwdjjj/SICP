function is_even(n) {
  return n % 2 === 0;
}

function fib(n) {
  return fib_iter(1, 0, 0, 1, n);
}

function fib_iter(a, b, p, q, count) {
  return count === 0
    ? b
    : is_even(count)
    ? fib_iter(a, b, p * p + q * q, 2 * p * q + q * q, count / 2)
    : fib_iter(b * q + a * q + a * p, b * p + a * q, p, q, count - 1);
}

console.log(fib(10));

// |a b| |p+q q|
//       |q   p|

// T2 : 행렬식 한번더 연산한 것
