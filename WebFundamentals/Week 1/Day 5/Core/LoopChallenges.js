//Print odds 1-20

for (var i=1;i<=20;i++){
    if(i%2==1){
        console.log(i)
    }
}

//Decreasing multiples of 3

for (var i=100;i>=0;i--){
    if (i%3==0){
        console.log(i);
    }
}

//Print the sequence

var i=4;
while (i>=(-3.5)){
    console.log(i);
    i=i-1.5;
}

//Sigma

var sum=0;
for (var i=1;i<=100;i++){
    sum=sum+i;
}
console.log(sum);


//Factorial

var product=1;
for (var i=1;i<=12;i++){
    product*=i;
}
console.log(product);
/////////////////////