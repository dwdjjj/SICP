// SICP JS 1.3.3

function abs(x) {
  return x >= 0 ? x : -x;
}
let cnt = 0;
const tolerance = 0.00001;
function fixed_point(f, first_guess) {
  function close_enough(x, y) {
    return abs(x - y) < tolerance;
  }
  function try_with(guess) {
    console.log(guess);
    cnt += 1;
    const next = f(guess);
    return close_enough(guess, next) ? next : try_with(next);
  }
  return try_with(first_guess);
}

fixed_point((x) => Math.log(1000) / Math.log(x), 2.0);
console.log("총계산단계 : " + cnt);
// 나누는 로그가 0이면 안되니 1을 첫 어림값으로 못둠
console.log("아래는 평균내서");
function fixed_point_with_average(f, first_guess) {
  function close_enough(x, y) {
    return abs(x - y) < tolerance;
  }
  function try_with(guess) {
    console.log(guess);
    const next = (guess + f(guess)) / 2;
    return close_enough(guess, next) ? next : try_with(next);
  }
  return try_with(first_guess);
}

fixed_point_with_average((x) => Math.log(1000) / Math.log(x), 2.0);
// 8번 계산거침
