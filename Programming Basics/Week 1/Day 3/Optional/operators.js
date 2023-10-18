function howMuchLeftOverCake (numberOfPieces,numberOfPeople){
    var remainingPieces=numberOfPieces%numberOfPeople;
    //   console.log(numberOfPieces%numberOfPeople+" remaining pieces");
    if (remainingPieces==0){
        console.log("No leftovers for you!");}
    else if (remainingPieces<=2){
        console.log("You have some leftovers");}
    else if (remainingPieces<=5){
            console.log("You have leftovers to share");}
    else {
        console.log("Hold another party!");}


}

howMuchLeftOverCake(12,4);
howMuchLeftOverCake(12,5);
howMuchLeftOverCake(12,7);
howMuchLeftOverCake(30,8);