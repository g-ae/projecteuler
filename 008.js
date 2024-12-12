console.time("008")
// get input at https://projecteuler.net/problem=8
const input = require("fs").readFileSync("./008_input.txt").toString();
function largest_product(n_adjecent) {
    let greatestProduct = 0
    for (i = 0; i < input.length; i++) {
        const next4 = input.substring(i, i + n_adjecent).split('').reduce((m,n) => m * n)
        if (greatestProduct < next4) greatestProduct = next4
    }
    return greatestProduct
}

console.log(largest_product(13))
console.timeEnd("008")