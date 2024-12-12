function nth_prime_number(n) {
    let i = 0
    let currNumber = 1
    while(i < n) {
        currNumber++
        if (isPrime(currNumber)) i++
    }
    return currNumber
}

function isPrime(n) {
    for (i = 2; i < n; i++) {
        if (n % i == 0) return false
    }
    return true
}

console.time("007")
console.log(nth_prime_number(10001))
console.timeEnd("007")
// 1.469s
// didn't find any other way to optimize