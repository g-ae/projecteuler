# Find sum of digits of 2^1000

sum = 0

for n in str(2**1000):
    sum += int(n)

print(sum)