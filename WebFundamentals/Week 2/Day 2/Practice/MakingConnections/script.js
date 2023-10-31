console.log("page loaded...");

var req=document.querySelector("#req");
var connex=document.querySelector("#connex");



function removeLine(id){
    var e=document.querySelector(id);
    e.remove();
    req.innerText--;
}

function accept(id){
    removeLine(id);
    connex.innerText++;
}

function changeName() {
    document.querySelector(".card-body h1").innerText="John Smith";
    }