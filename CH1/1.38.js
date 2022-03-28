// 1.38 e-2로 펼쳐지는 연속분수. e는 자연로그의 밑수
// 모든 Ni = 1, Di는 1, 2, 1, 1, 4, 1, 1, 6, 1, 1, 8 ... e추정하는 프로시저 짜기.

function cont_frac_r(n, d, k) {
  function fraction(i, cur) {
    return i === 0 ? cur : fraction(i - 1, n(i) / (d(i) + cur));
  }
  return fraction(k, 0);
}
console.log(
  2 +
    cont_frac_r(
      (i) => 1,
      (i) => ((i + 1) % 3 < 1 ? (2 * (i + 1)) / 3 : 1),
      20
    )
);

function cont_frac_i(n, d, k) {
  function iter(i, tmp) {
    return i <= 0 ? tmp : iter(i - 1, n(i) / (d(i) + tmp));
  }
  return iter(k, 0);
}
function cont_frac_iter(n, d, k) {
  return cont_frac_i(n, d, k);
}
console.log(
  2 +
    cont_frac_iter(
      (i) => 1,
      (i) => (i % 3 == 2 ? ((i + 1) * 2) / 3 : 1),
      30
    )
);
