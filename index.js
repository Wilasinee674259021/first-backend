/*import { add, minus, multiply, divide, modulus } from "./math.js";
const a = 8;
const b = 9;

console.log(`${a} + ${b} = ${add(a, b)}`);
console.log(`${a} - ${b} = ${minus(a, b)}`);
console.log(`${a} * ${b} = ${multiply(a, b)}`);
console.log(`${a} / ${b} = ${divide(a, b)}`);
console.log(`${a} % ${b} = ${modulus(a, b)}`);*/

import "dotenv/config";
const port = process.env.PORT;
const name = process.env.Name;
console.log(port);
console.log(name);
console.log(process.env.SECRET_KEY);
