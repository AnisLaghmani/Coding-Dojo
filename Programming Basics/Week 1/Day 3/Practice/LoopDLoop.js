//Questions
// the "every time a runner reaches 2 miles on a treadmill " indicates that we need a loop
//the starting point of the loop is when the runner starts running
//the loop stops when th 6 miles are done
// we are the ones who will configure when the loop ends
// the miles counter will be incremented every iteration
// we need a miles variable and amiles counter and maybe if we want we can add a variable who have 6miles const(the limit)


function candyPopOut(){
    for ( var miles =0 ; miles <=6 ; miles++ ) {
        if ((miles==2)||(miles==4)||(miles==6)) {
        console.log("2 miles done take a candy!");
        }
    }
    miles=0;
}
candyPopOut();    


// ninja bonus 
var speed=5;

function candyPopOut(){
    for ( var miles =0 ; miles <=6 ; miles++ ) {
        if (((miles==2)||(miles==4)||(miles==6))&&(speed>5.5)) {
        console.log("2 miles done take a candy!");
        }
    }
    miles=0;
}
candyPopOut();    