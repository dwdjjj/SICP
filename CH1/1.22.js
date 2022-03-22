// SICP JS 1.2.6
var start, end;
function square(x) {
  return x * x;
}
function is_even(n) {
  return n % 2 === 0;
}
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
function divides(a, b) {
  return b % a === 0;
}
function is_prime(n) {
  return n === smallest_divisor(n);
}

function timed_prime_test(n) {
  console.log(n);
  start = new Date();
  return start_prime_test(n, start.getTime());
}
function start_prime_test(n, start_time) {
  end = new Date();
  return is_prime(n) ? report_prime(end.getTime() - start_time) : true;
}

function report_prime(elapsed_time) {
  console.log(" *** ");
  console.log(elapsed_time);
}

// 틀림..
function search_for_primes(x, times) {
  return 0 < times
    ? timed_prime_test(x)
      ? search_for_primes(x + 2, times - 1)
      : search_for_primes(x + 2, times)
    : is_even(x)
    ? search_for_primes(x + 1, times)
    : search_for_primes(x, times);
}

// 솔루션 참고
function search_for_primes2(x, times) {
  return times === 0
    ? true
    : is_even(x)
    ? search_for_primes(x + 1, times)
    : is_undefined(timed_prime_test(x))
    ? search_for_primes(x + 2, times - 1)
    : search_for_primes(x + 2, times);
}

console.log(timed_prime_test(43)); // end 언제 new Date()해줘야할지 모르겟음
console.log(search_for_primes2(10000, 3));
// 10001 / 10003 / 10005 뜨고
// return n % 2 === 0;
// RangeError: Maximum call stack size exceeded
// 에러뜸
