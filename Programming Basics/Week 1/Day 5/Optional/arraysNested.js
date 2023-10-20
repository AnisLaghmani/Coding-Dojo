function bestLocation(arr){
 var location=[0,0];
 var totalDistance=0;

 totalDistance= (Math.abs(arr[0])+ Math.abs(arr[1]))/2;

location[0]=arr[0]-totalDistance;
location[1]=arr[1]-totalDistance;

    return location;
}
console.log(bestLocation([-42,32]));