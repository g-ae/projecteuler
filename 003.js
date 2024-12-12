const target = 600851475143

function biggest_prime_factor(num) {
  let resp = num
  let curr_divider = 2
  const factors = []
  while (resp != 1) {
    if (resp % curr_divider == 0) {
      if (!factors.includes(curr_divider)) factors.push(curr_divider)
      resp = resp / curr_divider
      curr_divider = 2
    } else {
      curr_divider = getNextPrimeNumber(curr_divider)
    }
  }
  return Math.max(...factors)
}

function getNextPrimeNumber(from) {
  let curr = from + 1
  while (true) {
    if (isPrime(curr)) return curr
    curr++
  }
}

function isPrime(num) {
  for (i = 2; i < num; i++) {
    if (num % i == 0) return false
  }
  return true
}

console.time("Euler problem 3")
console.log(biggest_prime_factor(target))
console.timeEnd("Euler problem 3")
// 17 ms