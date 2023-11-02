var arr=[];
function press(e){
    var displayDiv = document.querySelector("#display");
    if (displayDiv.innerText==0){
        displayDiv.innerText="";
    }
    displayDiv.innerText += e;
}

function clr(){
    var displayDiv = document.querySelector("#display");
    displayDiv.innerText=0;
}
function setOP(op){
    var displayDiv = document.querySelector("#display");
    arr.push(displayDiv.innerText);
    arr.push(op)
    clr();
}

function calculate(){
    var displayDiv = document.querySelector("#display");
    displayDiv.innerText=eval(arr[arr.length-2]+arr[arr.length-1]+displayDiv.innerText);
}