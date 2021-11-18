var mouseEvent="empty";
var lastPositionX,lastPositionY;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="black";
width=1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width_of_the_line").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseLeave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
currentPositionX=e.clientX-canvas.offsetLeft;
currentPositionY=e.clientY-canvas.offsetTop;

if(mouseEvent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;

    console.log("Last Position of X and Y = ");
    console.log("x= "+lastPositionX+" y= "+lastPositionY);
    ctx.moveTo(lastPositionX,lastPositionY);

    console.log("Current Position of X and Y = ");
    console.log("x= "+currentPositionX+" y= "+currentPositionY);
    ctx.lineTo(currentPositionX,currentPositionY);
    ctx.stroke();
}

lastPositionX=currentPositionX;
lastPositionY=currentPositionY;
}

function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}