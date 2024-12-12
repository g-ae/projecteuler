function sum_square_difference(first_n_natural) {
    const sum_each_square = (first_n_natural*(first_n_natural+1)*(2*first_n_natural+1))/6
    const sum_squared = Math.pow((first_n_natural * (first_n_natural+1))/2,2)
    return Math.abs(sum_each_square - sum_squared)
}

console.time("006")
console.log(sum_square_difference(100))
console.timeEnd("006")
// 7.8 ms