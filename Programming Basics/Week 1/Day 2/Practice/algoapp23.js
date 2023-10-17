//---------------Level 2 ---------------------

//challenge1
var x=[1,2,4];
console.log(x);
//challenge2
var x =[1,3,5];
console.log(x[0]);
//challenge3
var x =[2,4,6];
console.log(x[1]);
//challenge4
var x =[1,3,5];
console.log(x[2]);
//challenge5
var x =[1.3];
console.log(x[0]);
//challenge6
var x =[1,2,4];
x[0]=x[1];
console.log(x);
//challenge7
var x =[1,3,5];
var y=x.length;
console.log(y);
//challenge8
var x =[2,4,6,3,7];
var y=x.length-2;
console.log(x[y]);
//challenge9
var x =[2,4,6,3,7];
var y=x.length;
console.log(x[y-1]);
//challenge10
var x =[1,3,5,7];
x[0] = x[x.length-2];
console.log(x);
//challenge11
var x =[1,3,5,7];
x[x.length-3] = x[x.length/2+x.length/4];
console.log(x);
//challenge 12
var x =[1,3,5,7];
var y=[2,4,6];
x[2]=y[x.length-3];
console.log(x);
//challenge 13
var x =[1,3,5,7];
var y=[2,4,6];
x[2]=y[x.length-3]+x[x[0]+y[0]];
console.log(x);

//------------Level 3-------------------

//challenge1
var x =[1,3,5];
x[0]=x[2];
x[1]=x[0];
console.log(x)
//challenge2
var x =[1,3,5];
var y =[0,5,7];

x[0]=x[1]+y[2];
y[1]=y[2]-x[0];
console.log(x)
//challenge3
var x=[1,3,5,8];
x[0]=x[x.length-1];
console.log(x);
//challenge4
var x =[1,3,5,8];
var temp=x[x.length-1];
x[x.length-1]=x[0];
console.log(x);
//challenge5
var x =[1,3,5,8];
var temp=x[x.length-1];
x[x.length-1]=x[0];
x[0]=temp;
console.log(x);
//challenge6
var x=[1,3,5,8];
x.pop();
x.push(7);
console.log(x);
//challenge7
var x=[1,3,5];
x[0]=15;
x[3]=77;
console.log(x);
//challenge8
var x=[1,3,5,8,2,-5,-8];
x[0]=x[x.length-1];
x[x.length-1]=x[0];
console.log(x);
//challenge9
var x=[1,3,5,8,2,-5,-8];
var temp = x[x.length-1];
x[x.length-1]=x[0];
x[0]=temp;
console.log(x);
//challenge10
var x= [1,3,5];
x.push(7);
console.log(x);
//challenge11
var x= [2,4,6];
x.push(3);
console.log(x);
//challenge12
var x= [1,3,5];
var y=x[0]+x[1];
x.push(y);
console.log(x);
//challenge13
var x= [2,3,5];
x.push(x[0]+x[1]);
console.log(x);
//challenge14
var x= [1,3,5];
x.pop();
console.log(x);
//challenge15
var x= [1,3,5];
x.push(2);
x.pop();
console.log(x);