function abs(x) {
  return x >= 0 ? x : -x;
}
const tolerance = 0.00001;

// k개의 연속분수구성
function cont_frac_r(n, d, k) {
  function fraction(i) {
    return k < i ? 0 : n(i) / (d(i) + fraction(i + 1));
  }
  return fraction(1);
}

function cont_frac_i(n, d, k) {
  function iter(i, tmp) {
    return i <= 0 ? tmp : iter(i - 1, n(i) / (d(i) + tmp));
  }
  return iter(k, 0);
}

console.log(
  cont_frac_r(
    (i) => 1,
    (i) => 1,
    10
  )
); // 0.6179775280898876
console.log(
  cont_frac_r(
    (i) => 1,
    (i) => 1,
    15
  )
); // 0.6180344478216819
console.log(
  cont_frac_r(
    (i) => 1,
    (i) => 1,
    20
  )
); // 0.6180339850173578
console.log(
  cont_frac_r(
    (i) => 1,
    (i) => 1,
    30
  )
); // 0.6180339887496482
// 황금비 : 1.618...

function fixed_point() {
  function close_enough(x, y) {
    return abs(x - y) < tolerance;
  }
  function try_with(k, guess) {
    console.log(k);
    const next = cont_frac_i(
      (i) => 1,
      (i) => 1,
      k + 1
    );
    return close_enough(guess, next) ? next : try_with(k + 1, next);
  }
  return try_with(1, 1);
}
fixed_point(); // k는 13까지 늘어야 소수 넷째자리까지 맞아떨어짐.
