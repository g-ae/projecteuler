function largestPalindrome3digit() {
    const data = []
    const offset = 50
    let base = 999
    for(i = base; i >= 100; i--) {

        for (j = i; j >= 100 && j > 0; j--) {
            const str = (i*j).toString()
            if (str == str.split('').reverse().join('')) data.push(i*j)
        }

        if (i == base - offset) {
            base -= offset
        }
    }
    return Math.max(...data)
}

console.time("Euler problem 4")
console.log(largestPalindrome3digit())
console.timeEnd("Euler problem 4")
// 149.37 ms