const c = document.querySelector("body");
const col = c.style;
const clickMe = document.getElementById("clickMe");
const displayColor = document.getElementById("color");

var r,g,b;

clickMe.onclick = function() {
    r = Math.floor(Math.random()*255);
    g = Math.floor(Math.random()*255);
    b = Math.floor(Math.random()*255);
    col.backgroundColor = `rgb(${r},${g},${b})`;
    displayColor.innerText = col.backgroundColor;
}



