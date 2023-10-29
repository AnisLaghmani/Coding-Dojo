console.log("page loaded...");
function over(element) {
    element.play();    
}
    
function out(element) {
    element.pause();    
}
function soundOn(element){
    if(element.muted==true){
        element.muted=false;
    }
    else{
        element.muted=true;
    }
}
