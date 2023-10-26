var array1=[5,36,47,8,102];
var array2=["a","d","f","r","o"];
//first way
function reverseArray(arr) {
    var reversedArr=[];
    for (var i=arr.length-1;i>=0;i--){ 
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}
//second way
function reversedArray(arr) {
    for (var i=0;i<(arr.length/2);i++){ 
        var temp=arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i]=temp;
    }
    return arr;
}

//test
console.log(array1);
console.log(reverseArray(array1));
console.log(array2);
console.log(reversedArray(array2));

