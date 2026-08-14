const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


const PI = 3.14;
export default PI;
export const circleArea = (r) => {
    return PI * r * r;
};

export { add, subtract, multiply, divide };