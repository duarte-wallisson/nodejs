n1 = 30
n2 = 150

const sum = require("./functions/sum")
const sub = require("./functions/sub")
const mult = require("./functions/mult")
const div = require("./functions/div")

function print() {
    console.log(sum(n1, n2))
    console.log(sub(n1, n2))
    console.log(mult(n1, n2))
    console.log(div(n1, n2))
}

print()