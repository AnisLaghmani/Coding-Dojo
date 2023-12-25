const myArr=[3,2,9,5,1,4,8]
const arrTest=[4,5,1,3,6,7,10,2,8,9]
function selectionSort(arr){
    for (let i=0;i<arr.length;i++){
        let indice=i
        for (let j=i+1; j<arr.length;j++){
            if (arr[indice]>arr[j]){
                indice=j
            }
        }
        let valeur=arr[i]
        arr[i]=arr[indice]
        arr[indice]=valeur
    }
    return arr
}
console.log(selectionSort(arrTest))
