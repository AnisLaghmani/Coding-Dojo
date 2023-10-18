//----Level10------
//challenge1
var x=[["coding","boom"],["dojo","yeah"]];
console.log(x[0][0]+"-"+x[1][0]);
//challenge2
var x=[[5,10],[15,20,25,30],[45,50]];
console.log(x[1][3]+x[2][1]+x[0][0]);
//challenge3
var x=2;
var y=[[2,4,6,8],[10],[12,32,50]];
if(y[0][0]==x)
    {
    console.log("Hello World");
}
else{
    console.log("Codingdojo");

}
//challenge4
var numbers=[[1,4,5,7],[2,6,8,9]];
if (numbers[0][3]==7){
    numbers[0].push(10);
    console.log(numbers[0]);
}
//challenge5
var x=[[2,4,6,8],[12],[10,32,50]];
if (x[1][0]-x[2][0]==x[0][0]){
    console.log(x[1][0]+x[2][1]+x[0][2]);
}
else{
    console.log(x[0][0]+x[1][0]+x[0][3]);
}
//------------Level11---------
//challenge1
var x=[];
x[0]="Hello";
x[1]="World";
x[2]=100;
console.log(x.length+" "+x[0]);
//challenge2
var x=2;
var points=[40,100,1,5,25,10];
if (points[x]==1){
    console.log(points[x-2]);
}
else{
    console.log("hello");
}
//challenge3
var y=[1,2,3,4,5];
var z=[6,7,8,9,10];
if(y[x]+z[1]==z[4])
{
    console.log("Dojo");
}
else{
    console.log("Hello World");
}
//challenge4
var x="boom";
var y=["hi","hello","hey"];
if(x.length==3){
    y.push(x);
    console.push(x[3]);
}
else{
    console.log(x);
}
//challenge5
var x=["John","Chris","Mark","PJ"];
if (x.length==4){
    console.log(x[x.length-3]);
}
else{
    console.log("Dojo");
}
//--------------Level12--------------
//challenge1
var a=100;
function abc(){
    var a=25;
}
console.log(a);
//challenge2
var a=100;
function abc(){
    var a=25;
}
abc();
console.log(a);
//challenge3
var a=100;
function abc(){
    var a=25;
    console.log(a);
}
abc();
console.log(a);
//challenge4
var x=10;
function abc(x){
    console.log(x);
    return x*10;
}

console.log(x);
//challenge5
var x=10;
function abc(x){
    console.log(x);
    return x*10;
}
abc(x);
console.log(x);
//challenge6
var x=10;
function abc(x){
    console.log(x);
    return x*10;
}
var z=abc(x);
console.log(z);
//challenge7
var x=10;
function abc(x){
    console.log(x);
    return x*10;
}
var z=abc(x)+abc(x);
console.log(z);
//challenge8
var x=10,y=20;
function abc(x,y){
    x=x+10;
    y=y+10;
    console.log(x);
    console.log(y);
}

console.log(x);
console.log(y);
//challenge9
var x=10,y=20;
function abc(x,y){
    x=x+10;
    y=y+10;
    console.log(x);
    console.log(y);
}
abc(x,y);
console.log(x);
console.log(y);
//challenge10
var x=10,y=20;
function abc(x,y){
    x=x+10;
    y=y+10;
    console.log(x);
    console.log(y);
    return x*10;
}
z=abc(x,y);
console.log(x);
console.log(y);
console.log(z);
//challenge11
var x=10,y=20;
function abc(x,y){
    x=x+10;
    y=y+10;
    return x*10;
}
z=abc(x,y)+abc(y,x);
console.log(z);
//challenge12
var x=[1,3,5,7];
function abc(){
    var x=[0,1,2,3];
    for (var i=0;i<x.length;i++){
        x[i]=x[i]+2;
    }
}
abc();
console.log(x);
//challenge13
var x=[1,3,5,7];
function abc(){
    var x=[0,1,2,3];
    for (var i=0;i<x.length;i++){
        x[i]=x[i]+2;
    }
    return x;
}
abc();
console.log(x);
//challenge14
var x=[1,3,5,7];
function abc(){
    var x=[0,1,2,3];
    for (var i=0;i<x.length;i++){
        x[i]=x[i]+2;
    }
    return x;
}
x=abc();
console.log(x);
//challenge15
function abc(num){
    var arr=[];
    for (var i=0;i<num;i++){
        arr.push(i)
    }
    return arr;
}
dojo=abc(5);
console.log(dojo);
//challenge16
function abc(num){
    var arr=[];
    for (var i=0;i<num;i++){
        if(i%2==0){
            arr.push(i);
        }
    }
    return arr;
}
dojo=abc(5);
console.log(dojo);
//challenge17
function abc(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]="dojo";
        }
    }
    return arr;
}
output=abc([-3,0,3,-5]);
console.log(output);
//challenge18
function abc(number){
    var arr=[];
    for (var i=0;i<number;i++){
        arr.push(0);}
    return arr;
}
output=abc(5);
console.log(output);    
//challenge19
function abc(number){
    var sum=0;
    for (var i=0;i<=number;i++){
        sum=sum+i;}
    console.log(sum);
    return sum+10;
}
output=abc(2);
console.log(output);    
//challenge20
function abc(number){
    var sum=0;
    for (var i=0;i<=number;i++){
        sum=sum+i;}
    console.log(sum);
    return sum+10;
}
output=abc(2)+abc(3);
console.log(output);    
//challenge21
function looping(x,y){
    for(var i=0;i<x;i++){
        for (var j=0;j<y;j++){
            console.log(i*j);
        }
    }
    return x*y;
}
z=looping(2,3);
console.log(z);
