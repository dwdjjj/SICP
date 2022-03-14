// 세제곱근 구하는 뉴턴메서드 프로시저 짜기.

function abs(x) {
  return x >= 0 ? x : -x;
}
function cube(x) {
  return x * x * x;
}
function div_by_three(x, y) {
  return (x + y) / 3;
}

function improve(guess, x) {
  return div_by_three(x / square(guess) + 2 * guess);
}
function is_good_enough(guess, x) {
  return abs(cube(guess) - x) < 0.001;
}

function check_recursion(guess, x) {
  return is_good_enough(guess, x)
    ? guess
    : check_recursion(imporove(guess, x), x);
  return;
}

console.log(check_recursion(3, 27));
