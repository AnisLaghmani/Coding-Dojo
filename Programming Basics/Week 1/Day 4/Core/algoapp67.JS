//-----------LEVEL 6--------
// challenge1
function a()
{
    console.log(5)
}
a();
//challenge2
function a()
{
    console.log(55)
}
//challenge3
a();
function a()
{
    console.log(25)
}
//challenge4
function a()
{
    var b=25;
    b=b+10;
    console.log(b)
}
a();
//challenge5
function a(b,c)
{
    console.log(b)
    console.log(c)

}
a(3,5);
//challenge6
function a(b,c)
{
  return b+c;
}
console.log(a(3,5));
//challenge7
function a(b,c)
{
  return b*c;
}
console.log(a(3,5));
//challenge8
function a(b,c)
{
  return b*3-c;
}
console.log(a(3,2));
console.log(a(1,1));
//challenge9
function a(b,c)
{
  return b+c;
}
console.log(a(1,1)+a(2,2));
//challenge10
function a(b,c)
{
  return b+c;
}
console.log(a(1,a(2,3)));
//challenge11
function a(b,c)
{
  return b+c;
}
console.log(a(a(1,2),a(2,3)));
//challenge12
function a(b,c)
{
  return b+c;
}
console.log(a(a(1,2),a(2,a(1,2))));
//challenge13
function a(b,c)
{
    console.log(b);
  return b+c;
}
console.log(a(3,2));
//challenge14
function a(b,c)
{
    console.log(c);
  return b-c;
}
console.log(a(3,2));
//challenge 15
function a(){
    return 25;
    return 50;
}
console.log(a());
//challenge16
function a(b,c){
    return 25;
    return b+c;
}
console.log(a(3,2));
//challenge17
function a(b,c)
{
  return b+c;
}
console.log(a(a(2,3),a(1,1)));
//challenge 18
function a (b,c)
{
    return 0;
}
console.log(a(a(2,3),a(1,1)));
//---------Level 7----------------
//challenge1
for (var i=1;i<100;i++){
    if (i==10)
    {break;}
    console.log(i);
}
//challenge2
for (var i=13;i<=20;i++)
{
    if (i==50){break;}
    console.log(i);
}
//challenge3
for (var i=1;i<=20;i++)
{
    if (i>5){break;}
    else{console.log('hello');}
}
//challenge4
for (var i=9;i<=20;i++)
{
    if (i==10){break;}
    else{console.log('hello');}
    console.log(i);
}
//challenge5
var message='CodingDojo';
for (var i=5;i<=20;i++)
{
    if (i==message.length){
        break;
    }

console.log(i);
}
