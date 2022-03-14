function is_even(n) {
  return n % 2 === 0;
}

function fib(n) {
  return fib_iter(1, 0, 0, 1, n);
}

function fib_iter(a, b, p, q, c) {
  return c === 0
    ? b
    : is_even(c)
    ? fib_iter(a, b, p * p + q * q, 2 * p * q + q * q, c / 2)
    : fib_iter(b * q + a * q + a * p, b * p + a * q, p, q, c - 1);
}

fib(5);
