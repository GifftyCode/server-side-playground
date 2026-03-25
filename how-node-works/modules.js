//  console.log(arguments)
// console.log(require("module").wrapper)

// Module exports
const Calc = require("./test-module-1") 
const calc1 = new Calc()

console.log(calc1.add(2, 4))

// exports
// const calc2 = require("./test-module-2")
// console.log(calc2.mul(3, 9))


const {add, sub} = require("./test-module-2")
console.log(sub(12, 3))
