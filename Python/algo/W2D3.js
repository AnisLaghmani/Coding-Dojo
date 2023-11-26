/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid

Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
*/
const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

const str5 = "a)b((c))";
const expected5 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

function parensValid(str = "") {
    var CountOpenP=0
    var CountCloseP=0
    var expected=false
    var arr=[]
    for (var i=0;i<str.length;i++){
        if (str[i]=="(" ){
            CountOpenP++
            arr.push(str[i])
        }else if (str[i]==")"){
            CountCloseP++
            arr.push(str[i])
        }   
    }
    if ((CountCloseP==CountOpenP)&&(arr[0]=="(")&&(arr[arr.length-1]==")")) {
        expected=true
    }
    return expected
}
// -----------------------------------------------------------------------------------------
function parensValid2(str = "") {
    var test=""
    for (var i=0;i<str.length;i++){
        if ((str[i]=="(" )||(str[i]==")") ){
            test+=str[i]
        }   
    }    
    console.log(test)
    if (test.length%2!=0){
        console.log(false)
    }else{
        console.log(true)
    }
}
console.log(parensValid(str1))
console.log(parensValid(str2))
console.log(parensValid(str3))
console.log(parensValid(str4))
console.log(parensValid(str5))
parensValid2(str1)
parensValid2(str2)
parensValid2(str3)
parensValid2(str4)
parensValid2(str5)
