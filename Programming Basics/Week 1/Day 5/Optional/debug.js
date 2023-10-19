// Debug the following code that removes negative values from an array

function removeNegatives(arr) {       //delete var from parameters
    var array=[];                      //initialize a new array that we gonna return with only positive values
    for(var i=0; i<=arr.length; i++) {  //i<arr.length not i<=arr.length: the maw index is arr.lrngth-1
        if(arr[i] >= 0) {                  //arr[i]must be >=0 not =<0 we search positive values that we gonna push in new array
            array.push(arr[i]);   
        
        }
    }
    return array;
}

var result = removeNegatives([3, 7, -23, 0, 2.5, -4]);
console.log(result);