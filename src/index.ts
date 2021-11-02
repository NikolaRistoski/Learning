import * as multypleModule from  "./multiply" // Import All into single variable
import { multyplyByTwo } from "./multiply"; // Import a single export from a module
import { multyplyByTwo as byTwo } from "./multiply"; // Renamed import


const a = 55;
const b = 5;

console.log(multypleModule)

console.log(`${a} * ${b} = ${multypleModule.default(a, b)}`)

console.log(`Multiply by two from single variable inport: ${multypleModule.multyplyByTwo(10)}`)
console.log(`Multiple by two from single export from module: ${multyplyByTwo(40)}`)
console.log(`Multiple by two from renamed import: ${byTwo(40)}`)