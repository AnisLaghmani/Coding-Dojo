function factorial(num){
    if (num === 1) {return 1 ;}
    return num*factorial(num-1);
}
x=factorial(7);
console.log(x);