#part1
x = [ [5,2,3], [10,8,9] ] 
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

x[1][0]=15
print(x)
students[0]["last_name"]="Bryant"
print(students[0])
sports_directory["soccer"][0]="Andres"
print(sports_directory["soccer"])
z[0]["y"]=20
print(z)

#part2
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'},
    {'first_name' : 'Mark', 'last_name' : 'Guillen'},
    {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
def iterateDictionary(x):
    for i in range (len(x)):
        for j in x[i]:
            print (j,x[i][j])
iterateDictionary(students)

#part3
def iterateDictionary2(key,x):
    for i in range (len(x)):
            print (x[i][key])
iterateDictionary2("last_name",students)

#part4


def printInfo(dict):
    for i in dict:
            print (len(dict[i]),i)
            for j in dict[i]:
                print(j)

dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
printInfo(dojo)




