//https://www.hackerrank.com/challenges/the-love-letter-mystery

#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the theLoveLetterMystery function below.
def theLoveLetterMystery(s):
  operation_cnt = 0
  letters = 'abcdefghijklmnopqrstuvwxyz'
  length = len(s)
  for i in range(length//2):
    a = s[i]
    b = s[length - i - 1]
    if (a != b):
      index_a = letters.index(a)
      index_b = letters.index(b)
      distance = index_a - index_b
      if distance > 0:
        operation_cnt += distance
      else:
        operation_cnt -= distance
  return operation_cnt        
    
  
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    q = int(input())

    for q_itr in range(q):
        s = input()

        result = theLoveLetterMystery(s)

        fptr.write(str(result) + '\n')

    fptr.close()
