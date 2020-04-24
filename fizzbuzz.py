
#FizzBuzz Exercise: Print out 1-100 
#and replace numbers divisible by 3 with “Fizz”, 
#numbers divisible by 5 with “Buzz”, 
#and numbers divisible by 3 and 5 print “FizzBuzz”.


n = 1

while n <= 100:

    output = ""
    if n % 3 == 0:
        output += "Fizz"
    if n % 5 == 0:
        output += "Buzz"
    if n % 3 != 0 and n % 5 != 0:
        output += str(n)
    print(output)
    n += 1
