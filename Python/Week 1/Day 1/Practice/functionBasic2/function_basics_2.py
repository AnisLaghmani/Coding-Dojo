#count down
def countdown(x):
    arr=[]
    for i in range(x,-1,-1):
        arr.append(i)
    return arr
print(countdown(5))

#print and return
def print_and_return(x=[]):
    print(x[0])
    return x[1]
print(print_and_return([2,3]))

#first plus length
def first_plus_len(x=[]):
    return x[0]+len(x)
print(first_plus_len([5,5,2,3]))

#Values Greater than Second
def values_greater_than_second(arr=[]):
    newarr=[]
    if len(arr)<2:
        return False
    else :
        print(arr[2])
        for i in range (len(arr)):
            if i>arr[2]: 
                newarr.append(i)
        return newarr
print (values_greater_than_second([5,2,3,2,1,4]))
print (values_greater_than_second([3]))

#this length that value 
def length_value(s,v):
    newarr=[]
    for i in range(s):
        newarr.append(v)
    return newarr
print(length_value(4,7))
print(length_value(6,2))



