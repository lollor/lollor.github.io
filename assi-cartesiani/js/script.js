var canvas = document.getElementById("disegno");
const zerox = canvas.width / 2;
const zeroy = canvas.width / 2;
const unita = 20;

var ctx = canvas.getContext("2d");
// ctx.fillStyle="rgba(255,0,0,0)";

//quadrato esterno
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(0,0);
ctx.lineTo(zerox*2,0);
ctx.lineTo(zerox*2,zeroy*2);
ctx.lineTo(0,zeroy*2);
ctx.lineTo(0,0);
ctx.stroke();
ctx.closePath();

//linee
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(zerox, zeroy);
ctx.lineTo(zerox * 2, zeroy);
ctx.moveTo(zerox, zeroy);
ctx.lineTo(0, zeroy);
ctx.moveTo(zerox, zeroy);
ctx.lineTo(zerox, 0);
ctx.moveTo(zerox, zeroy);
ctx.lineTo(zerox, zeroy*zeroy);
ctx.stroke();
ctx.closePath();

