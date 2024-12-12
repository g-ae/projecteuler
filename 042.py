import math
import time

def getTriangleIteration(num):
  # inverse function of (1/2) * n * (n+1)
  return (-1 + math.sqrt(1 + 8*num))/2

def charToInt(char):
  # (A = 1, B = 2, etc.)
  return ord(char) - 64

if (__name__ == "__main__"):
  # Time logging
  start_time = time.time()

  # Get word data on https://projecteuler.net/problem=42
  data = open('042_words.txt').read().replace('"','').split(',')

  # Initialize out variable
  numOfTriangleWords = 0

  # For every word in data
  for d in data:
    # Word value using charToInt function (A = 1, B = 2, etc.)
    wordValue = 0
    for c in d:
      wordValue += charToInt(c)
    if (getTriangleIteration(wordValue).is_integer()):
      numOfTriangleWords += 1
  
  # Show results
  print(numOfTriangleWords)
  print("Execution time : %ss" % (time.time() - start_time))
  # ~ 3 ms