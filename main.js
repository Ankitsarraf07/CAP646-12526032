import { add, subtract, multiply, divide } from './math.js';
import PI, { circleArea } from './math.js';
console.log(add(5, 3));
console.log(subtract(5, 3));
console.log(multiply(5, 3));
console.log(divide(5, 3));

console.log(`Area of circle with radius 5: ${circleArea(5)}`);