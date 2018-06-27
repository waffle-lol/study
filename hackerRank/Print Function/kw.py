#https://www.hackerrank.com/challenges/python-print/problem

if __name__ == '__main__':
    n = int(input())
    joiner = ''
    for i in range(n): joiner += str(i + 1)
    print(joiner)
