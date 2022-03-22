// SICP JS 1.2.6

function square(x) {
  return x * x;
}

// 2부터 시작하여 가장 작은 약수 구하기
// 루트n
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

console.log(smallest_divisor(63)); // 3
console.log(smallest_divisor(199)); // 199
console.log(smallest_divisor(1999)); // 1999
console.log(smallest_divisor(19999)); // 7

function is_even(n) {
  return n % 2 === 0;
}

function square(x) {
  return x * x;
}

// 페르마 검사 위한 거듭제곱하여 구한 값 modulo하는 프로시저
function expmod(base, exp, m) {
  return exp === 0
    ? 1
    : is_even(exp)
    ? square(expmod(base, exp / 2, m)) % m
    : (base * expmod(base, exp - 1, m)) % m;
}

console.log(expmod(4, 3, 5)); // 4
