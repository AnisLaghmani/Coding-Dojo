function insertionSort(arr){
    for (let i=1;i<arr.length;i++){
        let temp =arr[i]
        for (let j=i-1;j>=0;j--){
            if (temp<arr[j]){
                arr[j+1]=arr[j]
                if (j===0){
                    arr[j]=temp
                }
            }else{
                arr[j+1]=temp
                break
            }
        }
    }
    return arr
}
console.log (insertionSort([29,10,1,37,14]))