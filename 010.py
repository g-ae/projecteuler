import math, time

def isPrime(n):
    for i in range(2,math.ceil(math.sqrt(n)+1)):
        if (n % i == 0):
            return False
    return True

if (__name__ == "__main__"):
    start = time.time()
    sum = 2
    for i in range(3,int(2e6)):
        if (i % 100000 == 0):
            print(f"{i} / 2000000")
        if (isPrime(i)):
            sum += i
        i += 1 # skip even numbers
    print(sum)
    print(f"Time : {(time.time() - start)*1000} ms") # 9.7 s