// 되도는 프로세스와 되도는 프로시저를 헷갈리지 말자!
// 프로시저가 되돈다는 말은 프로시절르 정의하는 식에서 자신을 불러쓴다는 의미
// 하지만, 프로세스가 줄지어 되돈다는 말은 프로시저를 정의한 식이 그렇다는 게 아니라
// 진짜 계산이 그런 꼴로 펼쳐진다는 의미!
// 책에서의 fact-iter프로시저도 되도는 프로시저이나 반복하는 계산을 행하는 프로세스임.

function inc(x) {
  return x + 1;
}
function dec(x) {
  return x - 1;
}

function plus(a, b) {
  return a === 0 ? b : inc(plus(dec(a), b));
}
// 얘는 되도는 프로세스. 함수가 이후 계산할 정보를 계속 지니고 있어야 함
//
console.log(plus(4, 5));

function plus(a, b) {
  return a === 0 ? b : plus(dec(a), inc(b));
}
// 반복하는 프로세스.
console.log(plus(4, 5));
