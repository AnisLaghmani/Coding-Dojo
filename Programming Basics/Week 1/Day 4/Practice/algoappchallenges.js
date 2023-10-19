////challenge1
function get_array(){
    var arr=[];
    for (var i=1;i<=255;i++){
        arr.push(i);
    }
    return arr;
}
////challenge2
function sum_even_numbers(){
    var sum=0;
    for (var i=0;i<=1000;i++){
        if (i%2==0){
            sum=sum+i;
        }
    }
    return sum;
}
//challenge3
function summ_odd_5000(){
    var sum=0;
    for (var j=1;j<=5000;j++){
        if (j%2!==0){
            sum=sum+j;
        }
    }
    return sum;
}
//challenge4
function iterArr(arr){
    var sum=0;
    for (var i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}
//challenge5
function findMax(arr){
    var max=arr[0]
    for (var i=1;i<arr.length;i++){
        if (arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
//challenge6
function findAvg(arr){
    var avg=0;
    var sum=0;
    for (var i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    avg=sum/arr.length;
    return avg
}

//challenge7
function oddNumbers(){
    var arr=[];
    for (var i=1;i<51;i++){
        if (i%2!==0){
            arr.push(i);
        }
    }
    return arr;
}
//challenge8
function greaterY(arr,Y){
    var count=0;
    for (var i=0;i<arr.length;i++){
        if (arr[i]>Y){
            count=count+1
        }
    }
    return count;
}