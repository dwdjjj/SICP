function f(g) {
  return g(2);
}
function square(x) {
  return x * x;
}
console.log(f((z) => z * (z + 1)));
console.log(f(square));
console.log(f(f(square)));
// f(f)계산 실행시 결과는??
// f는 2를 지칭하니까 f(f) <=> 2(2)인데 괄호 바로바깥쪽 앞에오는 함수자리에 2가 들어가있으므로
// 함수실행을 진행할 수 없어서 에러가 발생할 것이다.
// 실행시 g is not a function 에러가 뜨고, 이는 return하는 g가 함수가 아니라는 의미.
