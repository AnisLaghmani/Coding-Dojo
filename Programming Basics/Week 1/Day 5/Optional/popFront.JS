function popFront (arr){
    var returnValue=arr[0];
    var array=[];
    for (var i=1;i<arr.length;i++){
       array[i-1]=arr[i]; 
    }
    for (var i=0;i<arr.length;i++){
        arr.pop();
     }

    arr=array;

    console.log (arr);

return returnValue;
}
console.log(popFront([5,93,22,4]));