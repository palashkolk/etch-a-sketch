let body=document.querySelector("body");
let containerDiv=document.querySelector("#container");
let divArray=[];
// let boxWidth;
for (let i=0;i<256;i++){
    divArray.push(document.createElement("div"));
    containerDiv.appendChild(divArray[i]);
    divArray[i].id=`div${i+1}`;
}

body.style.display="flex";
body.style.flexDirection="row";
body.style.justifyContent="center";
body.style.padding="0px";
body.style.margin="0px";

containerDiv.style.display="flex";
containerDiv.style.flexWrap = "wrap";
containerDiv.style.justifyContent="center";
// containerDiv.style.backgroundColor = "pink";
containerDiv.style.padding = "0px";
containerDiv.style.margin = "0px";
containerDiv.style.width = "50vw";
containerDiv.style.height = "50vw";

for (let divs of divArray){
    divs.style.flexBasis= "5.9%";
    divs.style.flexGrow="1";
    divs.style.height="6.25%";    
    divs.style.boxSizing="border-box"; 
}

containerDiv.addEventListener("mouseover", function(event) {
    if(event.target.id!="container"){
        document.querySelector(`#${event.target.id}`).style.backgroundColor= RGBcolor();
    } 
});

function RGBcolor() {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    let randomcolor = "rgb(" + R + "," + G + "," + B + ")";  
    return randomcolor;
  }
  



