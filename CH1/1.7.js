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

const err = 0.001;
function is_good_enough(guess, x) {
  return relative_error(guess, improve(guess, x)) < err;
}
function relative_error(estimate, reference) {
  return abs(estimate - reference) / reference;
}

function sqrt_iter(guess, x) {
  return is_good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x);
}

console.log(sqrt_iter(3, 25));
// 1.6 결과 : 5.000000002328306
// 1.7 결과 : 5.000152590218967
console.log(sqrt_iter(0.03, 0.0001));
// 1.6 : 0.03
// 1.7 : 0.010000305180437933

// 1.6에서 만든 is_good_enough는 아주 작거나 아주 큰 수의 제곱근을 구할 때
// 적절하지 않은 방식이다. 아주 작은 수의 경우 오차범위를 기존의 0.001보다 더 작게
// 아주 큰 숫자에서는 유효숫자 문제로 오차범위를 더 크게 지정해줘야 한다.

// 이에 1.7예제는 오차범위를 작게, 크게 정해야 할 경우이더라도 잘 작동하는 프로시저를 만듦.
