console.log("linked");
function changeUnit(e){
    for (var i=1;i<5;i++){
        if (e=="F"){
            var tMax=document.querySelector("#max"+i).innerText;
            var tMin=document.querySelector("#min"+i).innerText;
            tMin=(tMin*(9/5))+32;
            tMax=(tMax*(9/5))+32;

            document.querySelector("#max"+i).innerText=Math.ceil(tMax);
            document.querySelector("#min"+i).innerText=Math.floor(tMin);    
        }
        else if (e=="C"){
            var tMax=document.querySelector("#max"+i).innerText;
            var tMin=document.querySelector("#min"+i).innerText;
            tMin=(tMin-32)*5/9;
            tMax=(tMax-32)*5/9;
            document.querySelector("#max"+i).innerText=Math.ceil(tMax);
            document.querySelector("#min"+i).innerText=Math.floor(tMin);

        }
    }
}
function remove(){
    document.querySelector(".cookie").remove();
}