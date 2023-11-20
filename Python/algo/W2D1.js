/* 
  Given an array of strings
  return the number of times each string occurs (a frequency / hash table)
  hasOwnProperty()
*/
var user = {username:"John", age:35}

// console.log(user.hasOwnProperty('age'));
// console.log(user.hasOwnProperty('email'));

const arr1 = ["a", "a", "a"];
const expected1 = {
  a: 3,
};
const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
  a: 2,
  b: 1,
  c: 3,
  B: 1,
  d: 1,
};

const arr3 = [];
const expected3 = {};

function makeFrequencyTable(arr) {
    var result={}
    for (var i =0;i<arr.length;i++){
        result[arr[i]] = 1
        for (var j=0;j<arr.length;j++){
            if (arr[i]==arr[j]){
                result[arr[i]]+=1
            }
        }
        result[arr[i]]-=1
    }
    return console.log(result)
}
makeFrequencyTable(arr1)
makeFrequencyTable(arr2)
makeFrequencyTable(arr3)

function makeFrequencyTable2(arr){
    var expected={}
    for (var i=0;i<arr.length;i++){
        if(expected.hasOwnProperty([arr[i]])){
            expected[arr[i]] ++
        }
        else{
            expected[arr[i]]=1
        }
    }
    return console.log(expected)
}
makeFrequencyTable2(arr1)
makeFrequencyTable2(arr2)
makeFrequencyTable2(arr3)