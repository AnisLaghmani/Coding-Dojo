var minAge=10;
var minHeight=42;
var messageOk="Get on that ride kiddo!"
var messageNOk="Sorry kiddo,Maybe next year!"


//stretch  feature1 : first situation NOK
var customerAge=9;
var customerHeight=43;
if ((customerAge>=minAge)&(customerHeight>=minHeight)){
    console.log(messageOk);
}
else {
    console.log(messageNOk);
}
//second situation OK
var customerAge=11;
var customerHeight=43;
if ((customerAge>=minAge)&(customerHeight>=minHeight)){
    console.log(messageOk);
}
else {
    console.log(messageNOk);
}


//stretch  feature2
var customerAge=9;
var customerHeight=43;
if ((customerAge>=minAge)||(customerHeight>=minHeight)){
    console.log(messageOk);
}
else {
    console.log(messageNOk);
}

