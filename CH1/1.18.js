function is_even(n) {
  return n % 2 === 0;
}

function double(x) {
  return x * 2;
}

function half(x) {
  return x / 2;
}

function fast_times_iter(sum, a, b) {
  return b === 1
    ? a + sum
    : a === 0 || b === 0
    ? 0
    : is_even(b)
    ? fast_times_iter(sum, double(a), half(b))
    : fast_times_iter(sum + a, a, b - 1);
}
function times(a, b) {
  return fast_times_iter(0, a, b);
}

console.log(times(3, 4));
console.log(times(2, 5));
