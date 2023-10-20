function myReward (time,day){
        var reward="";
    if ((time<10)&(time>6)){
        reward="Latte";
    }
    else if (time<16){
        reward="hot chocolate";
    }
    else if (time<22){
        if (day=="wednesday"){
            reward="strawberry ice-cream";
        }
        else {
            reward="vanilla ice-cream";
        }
    }
    else {
        reward="sleep";
    }


    return reward;
}
console.log(myReward(17,"wednesday"));
console.log(myReward(17,"sunday"));