function cube(x) {
  return x * x * x;
}
function is_even(n) {
  return n % 2 === 0;
}
function sum(term, a, next, b) {
  return a > b ? 0 : term(a) + sum(term, next(a), next, b);
}
function cube(x) {
  return x * x * x;
}

// 정적분!
function integral(f, a, b, dx) {
  function add_dx(x) {
    return x + dx;
  }
  return sum(f, a + dx / 2, add_dx, b) * dx;
}

console.log(integral(cube, 0, 1, 0.01)); // 0.24998750000000042
console.log(integral(cube, 0, 1, 0.001)); // 0.249999875000001

// 심슨의 규칙따른 정적분
function integral_simpson(f, a, b, n) {
  function y(k) {
    return f(a + k * h);
  }
  function add_h(k) {
    return k === 0 || k === n ? y(k) : is_even(k) ? 2 * y(k) : 4 * y(k);
  }
  
}
