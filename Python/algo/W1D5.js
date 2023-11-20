
const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;

function isPalindrome(str) {
    var result=false
    var stop=Math.floor(str.length/2)
    for (var i=0;i<stop;i++){
        if (str[i]==str[str.length-1-i]){
            result=true
        }
        else{
            result=false
        }
    }
    return console.log(result)
}
isPalindrome(str1)
isPalindrome(str2)
isPalindrome(str3)
isPalindrome(str4)
