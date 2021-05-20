var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");  

color="gray";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.rect(150,143,430,200);
ctx.stroke();

color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke(); 

color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(345,210,40,0,2*Math.PI);
ctx.stroke();

color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(440,210,40,0,2*Math.PI);
ctx.stroke();

color="yellow";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(297.5,255,40,0,2*Math.PI);
ctx.stroke();

color="green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(392.5,255,40,0,2*Math.PI);
ctx.stroke();