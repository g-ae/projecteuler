numbers = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
}

# works 1-9999
def get_text_from_number(num: int) -> str:
    if num in numbers:
        return numbers[num]

    if len(str(num)) == 4:
        # thousand
        return numbers[int(str(num)[0])] + "thousand" + get_text_from_number(int(str(num)[1:]))

    if len(str(num)) == 3:
        # hundred
        rest = int(str(num)[1:])
        return numbers[int(str(num)[0])] + "hundred" + (f"and{get_text_from_number(rest)}" if rest != 0 else "")

    if len(str(num)) == 2:
        return numbers[int(str(num)[0] + "0")] + get_text_from_number(int(str(num)[1:]))

    return ""

sum = 0

for i in range(1,1001):
    currnum = get_text_from_number(i)
    print(currnum, len(currnum))
    sum += len(currnum)

print(sum)