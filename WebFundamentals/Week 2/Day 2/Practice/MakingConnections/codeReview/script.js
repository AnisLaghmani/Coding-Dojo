var req=document.querySelector("#req");
var connex=document.querySelector("#connex");



function removeLine(id){
    var e=document.querySelector(id);
    e.remove();
    req.innerText--;
}
function change(){
    var e=document.querySelector("#userName");
    e.innerHTML="Doe Jane";
}
function accept(id){
    removeLine(id);
    connex.innerText++;
}