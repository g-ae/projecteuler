function smallest_multiple() {
    currNum = 1
    while(
        currNum % 20 != 0 ||
        currNum % 19 != 0 ||
        currNum % 18 != 0 ||
        currNum % 17 != 0 ||
        currNum % 16 != 0 ||
        currNum % 15 != 0 ||
        currNum % 14 != 0 ||
        currNum % 13 != 0 ||
        currNum % 12 != 0 ||
        currNum % 11 != 0
    ) currNum++

    return currNum
}

console.time("005")
console.log(smallest_multiple())
console.timeEnd("005")
// 582 ms