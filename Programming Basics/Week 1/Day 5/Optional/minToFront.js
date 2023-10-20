//Construct an algorithm that locates the minimum value in an array and moves it to the first position
function minToFront(arr){
    var array=[];
    var minValue=arr[0];
    var minIndex=0;
    for (var i=0;i<arr.length;i++){
        if (arr[i]<minValue){
            minValue=arr[i];
            minIndex=i;
        }
    }  

    array.push(arr[minIndex]);
    for (var j=0;j<arr.length-1;j++){
        if (j==minIndex){
            j++;
        }
        array.push(arr[j]);
    }
    return array;
}
console.log(minToFront([5,93,22,4]));
