const MAX = 1000

// result = [3,5,6,9]
// so 3 + 6 + 9 + ... + 999
// 5 + 10 + 15 + 20
// - MULTIPLES OF 15

const threeSum = (Math.floor((MAX - 1) / 3) / 2) * (3 + 3 * Math.floor((MAX - 1) / 3))
const fiveSum = (Math.floor((MAX - 1) / 5) / 2) * (5 + 5 * Math.floor((MAX - 1) / 5))
const fifteenSum = (Math.floor((MAX - 1) / 15) / 2) * (15 + 15 * Math.floor((MAX - 1) / 15))

console.log(threeSum + fiveSum - fifteenSum)