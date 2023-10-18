//----------Level_8----------
//challenge1
for(var num1=1;num1<=3;num1++){
    for (var num2=1;num2<=2;num2++)
    {
        console.log('Dojo');
    }
}
//challenge2
for(var num1=0;num1<=3;num1++){
    for (var num2=0;num2<=2;num2++)
    {
        if(num1==5){
        console.log('coder');}
    }
    console.log("ninja");
}
//challenge3
var x='coding';
var y='dojo';
for (var num1=0;num1<=x.length-3;num1++){
    for(var num2=0;num2<=y.length-4;num2++)
    {console.log(x+y)}
}
//challenge4
var msg1='hello';
var msg2='world!';
for (var num1=1;num1<=msg1.length;num1++){
    for(var num2=1;num2<=msg2.length;num2++){
        if (msg1.length==4){console.log(msg1+""+msg2);}
     }
   if (num1!=4){console.log(msg1.length+msg2.length);}
}
//challenge5
var array=[5,3,4,1];
for (var x=0;x<array.length;x++){
    for(var y=array.length-1;y>=x;y--)
    {
        if (array[x]>array[y])
        {
            var temp=array[y];
            array[y]=array[x];
            array[x]=temp;
        }
    }
}
console.log(array);

//----------Level_9---------
//challenge1
var number="";
var x=5;
while (x<10){
    number+=x;
    x++;
}
console.log(number);
//challenge2
var count=1;
while(count<5){
    console.log("Dojo");
    count++;
}
//challenge3
var x=1;
var y=48;
while (x<100){
    if(x==y){
        break;
    }
    x++;

}
console.log(x);
//challenge4
var message="Coding";
var x=1;
while(x<100){
    x++;
}
console.log(message);
//challenge5
var x=7;
var message="boom";

while(x>message.length){
    console.log(message+x);
    x--;
}
