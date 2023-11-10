
///flatten array algo
function flatten (arr){
    var newArr=[];
    for (var i=0;i<arr.length;i++){
        for (var j=0;j<arr[i].length;j++){
            newArr.push(arr[i][j]);
        }
    }
    return newArr;
}
console.log(flatten([[5,7,3],[11,2,33],[55,64,101]]));

//2sums algo
function twoSums(arr,t){
    for (var i=0;i<arr.length;i++){
        for (var j=0;j<arr.length;j++){
            if (i!==j){
                var result=arr[i]+arr[j];
                if (result===t){
                    var pair=[i,j];
                    return pair;
                }
            }   
        } 
    }
}
console.log (twoSums ([3,2,4],6));
console.log (twoSums ([8,1,0],8));
console.log (twoSums ([3,3],6));
console.log (twoSums ([2,7,1,15],9));




