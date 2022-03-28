// SICP JS 1.3.3

function abs(x) {
  return x >= 0 ? x : -x;
}

// 함수에 첫 어림잡은 값을 주고 f 되풀이 계산 중 그값이 변치 않을때
// f의 fixed_point를 찾을 수 있음.
// 이어지는 두 값의 차이가 정해둔 차이보다 작아질때까지 계산.
const tolerance = 0.00001;
function fixed_point(f, first_guess) {
  function close_enough(x, y) {
    return abs(x - y) < tolerance;
  }
  function try_with(guess) {
    const next = f(guess);
    return close_enough(guess, next) ? next : try_with(next);
  }
  return try_with(first_guess);
}

// 1.35 : 1.2.2절 에서의 황금비가 x=>1+1/x 함수의 고정점임을 밝히고 fixed-point프로시저로 황금비찾기
// 식 양변에 x곱하면 x^2 = x + 1 -> 이차방적식꼴로 바꾸고 근의 공식으로 x값 구하면
// (1 + root(5)) / 2 라는 양수 근을 구할 수 있다.
console.log(fixed_point((x) => 1 + 1 / x, 1)); // 1.6180327868852458
