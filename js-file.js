let body=document.querySelector("body");
let containerDiv=document.querySelector("#container");
let btn=document.querySelectorAll("button");
let divArray=[];
// let boxWidth;
// for (let i=0;i<256;i++){
//     divArray.push(document.createElement("div"));
//     containerDiv.appendChild(divArray[i]);
//     divArray[i].id=`div${i+1}`;
// }
btn[0].addEventListener("click", function(event) {

    let numberOFGrid = Number(prompt("Please enter number of grid per side (keep it below 100)", 16));
    while(numberOFGrid>100){
        numberOFGrid = Number(prompt("Please choose a lower number (Keep it below 100)", 16));
    }
    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.lastChild);
    }

    let totalGrid=numberOFGrid*numberOFGrid;
    for (let i=0;i<totalGrid;i++){
        divArray.push(document.createElement("div"));
        containerDiv.appendChild(divArray[i]);
        divArray[i].id=`div${i+1}`;
        divArray[i].classList=`pixels`;
    }
    let flexWidth=(getRndInteger(100/(numberOFGrid+1),100/numberOFGrid)).toFixed(2);
    for (let divs of divArray){
        divs.style.flexBasis= `${flexWidth}%`;
        divs.style.flexGrow="1";
        divs.style.height=`${flexWidth}%`;    
        divs.style.boxSizing="border-box"; 
    }
    
});

btn[1].addEventListener("click", function(event) {
    for (let divs of divArray){
        let gridColor=divs.style.backgroundColor;
        if(gridColor!="white"){
            divs.style.backgroundColor= "white";
        }
    }
    
});

containerDiv.addEventListener("mousedown", function(event) {
    containerDiv.addEventListener("mouseover", eventHandler);
});

containerDiv.addEventListener("mouseup", function(event) {
    containerDiv.removeEventListener("mouseover", eventHandler);
});

function eventHandler(event) {
    if(event.target.id!="container"){
        document.querySelector(`#${event.target.id}`).style.backgroundColor= RGBcolor();
        opacityValue=Number(document.querySelector(`#${event.target.id}`).style.opacity)
        if(opacityValue<1){
            document.querySelector(`#${event.target.id}`).style.opacity= `${opacityValue+0.1}`;
        }else{
            document.querySelector(`#${event.target.id}`).style.opacity="1";

        }
    } 
}


body.style.display="flex";
body.style.flexDirection="column";
body.style.alignItems="center";
body.style.justifyContent="center";
body.style.padding="0px";
body.style.margin="0px";


if (window.innerWidth>window.innerHeight){
    sketchDimension="70vh";
}else{
    sketchDimension="70vw";
}


containerDiv.style.display="flex";
containerDiv.style.flexWrap = "wrap";
containerDiv.style.justifyContent="center";
containerDiv.style.alignItems="center";
containerDiv.style.padding = "0px";
containerDiv.style.margin = "0px";
containerDiv.style.width = sketchDimension;
containerDiv.style.height = sketchDimension;

for (let element of btn){

    element.style.fontSize="20px";
    element.style.margin="20px";
    element.style.padding="5px";
    element.style.minWidth="135px";
    element.style.borderRadius="5px";
}

function RGBcolor() {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    let randomcolor = "rgb(" + R + "," + G + "," + B + ")";  
    return randomcolor;
}
function getRndInteger(min, max){
    return Math.random()*(max - min) + min;
}




