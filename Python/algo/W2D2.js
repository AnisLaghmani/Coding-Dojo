/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/
const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

const str5 = "aabacdc";
const expected5 = "badc";


/**
 * De-dupes the given string.
 */
function stringDedupe(str) {
    var newstr=""
    for (var i=0;i<str.length;i++){
        if(newstr.indexOf(str[i])==-1){
            newstr+=str[i]
        }
    }
    return newstr
}
console.log(stringDedupe(str1))
console.log(stringDedupe(str2))
console.log(stringDedupe(str3))
console.log(stringDedupe(str4))
console.log(stringDedupe(str5))



