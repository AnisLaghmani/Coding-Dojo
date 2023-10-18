//Predict1:
function myBirthYearFunc(){
    console.log("I was born in "+1980);

}
myBirthYearFunc();
//in line 6 the function is called and console log will print "i was born in 1980"


//Predict2:
function myBirthYearFunc(birthYearInput){
    console.log("I was born in"+birthYearInput);
}
myBirthYearFunc(1980);
//1980 will replace birthyear input and console log will print "i was born in 1980"


//Predict3:
function add(num1,num2){
    console.log("summing Numbers !");
    console.log("num1 is :"+num1);
    console.log("num2 is :"+num2);
    var sum=num1+num2;
    console.log(sum);
}
add(10,20);
// 10will replace num1 ,20 will replace num 2 and we gonna see 4 console log:
//summing Numbers !
//num1 is :10
//num2 is :20
//30
