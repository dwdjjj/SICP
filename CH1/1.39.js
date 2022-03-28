// 1.39 프로시저(tan_cf x k)를 정의하기
// k는 계산에 쓸 마디수

function cont_frac(n, d, k) {
  function fraction(i, ans) {
    return i === 0 ? ans : fraction(i - 1, n(i) / (d(i) + ans));
  }
  return fraction(k, 0);
}

function tan_cf(x, k) {
  return cont_frac(
    (i) => (i === 1 ? x : -x * x),
    (i) => 2 * i - 1,
    k
  );
}

console.log(tan_cf(0.524, 30)); // PI/6
console.log(tan_cf(0.785, 30)); // PI/4
console.log(tan_cf(4.712, 30)); // 3PI/2, 270degree
// console.log(tan_cf(Math.PI, 14));
// math_tan(math_PI);
// 1라디안은 57.2958...도 degree
// PI radian = 180degree
