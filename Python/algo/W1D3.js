/* 
  Given an arr and a separator string, output a string of every item in the array separated by the separator.
  
  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/
//                   v
const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-7 mins to write the pseudocode here:
// define emty string
// for loop to isolate Elements
// concat element + separator in new string
// condition to knonw if the last character atteined dont add separator
//return string

// create the function and decide what params it needs and what it will return
function join(arr, separator) {
    var str=""
    for (var i=0;i<arr.length;i++){
        if (i==(arr.length-1)){
            str+=arr[i]
        }
        else {
            str+=arr[i]+separator
        }
    }
    return str
}
console.log(join(arr1,separator1))
console.log(join(arr2,separator2))
console.log(join(arr3,separator3))
console.log(join(arr4,separator4))
console.log(join(arr5,separator5))
