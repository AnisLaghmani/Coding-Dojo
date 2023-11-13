#  basic
for i in range(0,151):
    print(i)
#multiple of 5
for i in range(5,1001,5):
    print(i)
#counting the dojo way
for i in range(0,101):
    if i%10==0:
        print ("Coding dojo")
    elif i%5==0:
        print("Coding")
    else:
        print(i)
#whoa the suckers huge
sum_odd=0
for i in range(0,500000):
    if i%2!=0:
        sum_odd+=i 
print(sum_odd)
# countdown by fours
for i in range(2018,-1,-4):
    print (i)
#flexible counters
lowNum=2
highNum=9
mult=3
for i in range(lowNum,highNum+1):
    if i%mult==0:
        print(i)
