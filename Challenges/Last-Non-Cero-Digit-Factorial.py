
#Return the last non-zero digit of n!.

#Example

#For n = 5, the output should be
#lastNotZero(n) = 2.

#5! = 120

#For n = 10, the output should be
#lastNotZero(n) = 8.

#10! = 3628800
#Python
def lastNotZero(n):
 g=1
 while n:
  g*=n
  while g%10<1:g/=10
  g%=10**9
  n-=1
 return g%10
 
print(lastNotZero(70));