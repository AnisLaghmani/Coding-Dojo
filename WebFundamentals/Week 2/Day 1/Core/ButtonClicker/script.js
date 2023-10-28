//function log :login/logout changing button
function log(element) {
    if (element.innerText=="Login"){
        element.innerText="Logout";
        console.log("x");
    }
    else {
        element.innerText="Login";
        console.log("x2");
    }
}
//function hide to hide element when we click on it 
function hide(element){
    element.remove();
}