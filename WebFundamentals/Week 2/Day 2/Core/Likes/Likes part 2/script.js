console.log("linked");
function likesIncrease(x){
    if (x===1){
        document.querySelector("#neilLikes").innerText=+document.querySelector("#neilLikes").innerText+1;
    }
    else if (x===2){
        document.querySelector("#nicholeLikes").innerText=+document.querySelector("#nicholeLikes").innerText+1;
    } else if (x===3){
        document.querySelector("#jimLikes").innerText=+document.querySelector("#jimLikes").innerText+1;
    }
}