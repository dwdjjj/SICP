function plus(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function a_plus_abs_b(a, b) {
  return (b >= 0 ? plus : minus)(a, b);
}

console.log(a_plus_abs_b(2, -3));

// b가 음수면 minus함수를, 양수면 plus함수를 반환하는 삼항연산자를 통해 계산하므로
// 음수면 -연산을 두번하여 더하는 연산이 되고, +연산과 동일한 값을 반환한다.
