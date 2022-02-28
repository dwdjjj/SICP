console.log(10);
console.log(6 / 2);

const a = 3;
const b = a + 1;

console.log(a + b + a * b);

console.log(a == b); // a랑 b값은 다름

console.log(b > a && b < a * b ? b : a); // b = 4, a = 3 => 조건 참이니 b출력

console.log(a == 4 ? 6 : b == 4 ? 6 + 7 + a : 25);
// a는 3이니 첫 조건 거짓, b는 4가 맞으니 6 + 7 + a값 반환
console.log(2 + (b > a ? b : a)); // b가 a보다 크니까 조건 참 -> b값 반환

console.log((a > b ? a : a < b ? b : -1) * (a + 1));
