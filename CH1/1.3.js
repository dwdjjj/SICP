// 세 수를 인자로 입력받아서 그 중 큰 두개의 숫자를 제곱한 후 더하는 프로시저 정의
function BigSum(x, y, z) {
  return x < y && x < z
    ? y * y + z * z
    : y < x && y < z
    ? x * x + z * z
    : x * x + y * y;
}

console.log(BigSum(4, 3, 2));
