function is_even(n) {
  return n % 2 === 0;
}

function double(x) {
  return x * 2;
}

function half(x) {
  return x / 2;
}

function fast_times(a, b) {
  return b === 1
    ? a
    : a === 0 || b === 0
    ? 0
    : is_even(b)
    ? double(fast_times(a, half(b)))
    : a + fast_times(a, b - 1);
}

console.log(fast_times(3, 4));
