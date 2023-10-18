//--------Level_4-----------
//challenge1
var counter=1;
if (counter==1) {
    console.log('hello');
}
//challenge2
var counter=1;
if (counter==1){
    console.log ('hello');
}
else if (counter==2){
    console.log('world');
}
//challenge 3
var counter =2;
if (counter<10) {
    console.log ("less than 10");
}
else {
    console.log("greater than or equal to 10");
}
//challenge 4
var counter =1;
if (counter==5) {
    console.log ("coding ");
}
else {
    console.log("dojo");
}
//challenge 5
var x=[2,4,5] 
var counter=0;
if (x [counter]<5){
    console.log ("coding ");
}
else {
    console.log ("dojo");
}
//challenge6 
var x=[2,4,5];
var counter=2;
if (x[counter]>10)
{
    console.log('coding');
}
else{
    console.log('dojo');
}
//challenge 7 
var x=[2,4,5];
var counter =0;
if (x[counter]>0){
    console.log('coding');
    counter=counter+1;
}
console.log(x[counter]);
//challenge 8
var x=[2,4,5];
var counter =0;
if (x[counter]>0){
    console.log('coding');
    counter=counter+1;
}
if (x[counter]>0){
    console.log('coding');
    counter=counter+1;
}if (x[counter]>0){
    console.log('coding');
    counter=counter+1;
}
console.log(x);
console.log(counter);


//-----------Level_5----------
//challenge1
for (var i=0;i<10;i++){
    console.log(i)
}
//challenge2
var x=1;
for (var i=0;i<3;i++)
{
    x=x+1;
}
console.log(x);
//challenge3
var x=1;
for ( var i=0;i<3;i=i+2){
    x=x+1;
}
console.log(x);
console.log(i);
//challenge4
var x=1;
for (var i=0;i<-1;i=i+2)
{
    x=x+1;
}
console.log(x)
//challenge5 
var x=[];
for (var i=0;i<10;i++)
{
    x.push(i*2);
}
console.log(x);
//challenge6
var x=[1,3,5,8];
for (var i=0;i<x.length;i++)
{
    if(x[i]>4){
        x[i]=0
    }
}
console.log(x);
//challenge 7
var x=[-1,3,2,7];
for (var i=0;i<x.length;i++){
    if (x[i]<i){
        x[i]=-10;
    }
}
console.log(x);
//challenge 8 
for (var i=20;i!=10;i--){
    console.log(i);
}
//challenge9
var x=0;
for(var i=1;i<4;i++)
{
    x=x+i;
    console.log(x);
    console.log(i);
}
//challenge10
var x=0;
for (var i=1;i<4;i=i+2){
    x=x+i;
    console.log(x);
    console.log(i);
}