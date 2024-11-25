function sum(a, b) {
    return a + b;
}

export default sum;

export function calc(num1, num2, operator) {
     switch (operator) {
        case '+':
            return parseInt(num1) + parseInt(num2);
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
     }
}

export function triangleChecker(a, b, c) {
    if (a >= b + c || b >= a + c || c >= a + b) return 'none';
    else
      switch (true) {
        case a === b && b === c:
          return 'equilateral';
        case a !== b && b !== c && a !== c:
          return 'scalene';
        default:
          return 'isosceles';
      }
  }
