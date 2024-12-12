// fibonacci : 1 then follows a trend : " even - odd - odd ", repeat
// 1,2,3,5,8,13,21,34,55,89,144,233,377,610
const MAX_VALUE = 4 * Math.pow(10, 6)

let last1 = 1
let last2 = 2
let cnt = 2

while (last2 < MAX_VALUE) {
  let res = last1 + last2
  last1 = last2
  last2 = res
  if (res % 2 == 0) cnt += res
}

console.log(cnt)