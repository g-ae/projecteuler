import time

def getBiggestMultAround(data, x,y):
  biggest = 0

  # right
  try:
    now = 1
    for i in range(0,4):
      now *= data[y][x+i]
    if (biggest < now):
      biggest = now
  except:
    print("...")
    
  # up/right
  try:
    now = 1
    for i in range(0,4):
      now *= data[y-i][x+i]
    if (biggest < now):
      biggest = now
  except:
    print("...")
  
  # down/right
  try:
    now = 1
    for i in range(0,4):
      now *= data[y+i][x+i]
    if (biggest < now):
      biggest = now
  except:
    print("...")
    
  # down
  try:
    now = 1
    for i in range(0,4):
      now *= data[y+i][x]
    if (biggest < now):
      biggest = now
  except:
    print("...")

  return biggest

if (__name__ == "__main__"):
  start = time.time() 
  data = list(map(lambda x: list(map(int,x.split(' '))), open('011_input.txt').read().split('\n')))
  print(data)

  biggest = 0
  for y in range(0,len(data)):
    for x in range(0, len(data[y])):
      currBiggest = getBiggestMultAround(data, x, y)
      if biggest < currBiggest:
        biggest = currBiggest

  print(biggest)
  print(f"Time : {(time.time() - start)*1000} ms") # 33 ms