//https://www.hackerrank.com/challenges/tree-height-of-a-binary-tree

# Enter your code here. Read input from STDIN. Print output to STDOUT
'''
class Node:
      def __init__(self,info): 
          self.info = info  
          self.left = None  
          self.right = None 
           

       // this is a node of the tree , which contains info as data, left , right
'''
def height(root):
    if root.left == None and root.right == None:
        return 0
    l = height(root.left) if root.left else 0
    r = height(root.right) if root.right else 0
    return max(l, r) + 1
