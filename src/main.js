const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => {
  if (num2 === 0) {
    return 'It is not possible to divide by zero!';
  }
  return num1 / num2;
};

export {
  sum,
  sub,
  mult,
  div,
};
