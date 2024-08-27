const body = document.getElementsByTagName("body")[0];
function setColor(name){
    body.style.backgroundColor = name;
}
function random(){
    const green = Math.floor(Math.random() * 255);
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const color = `rgb(${green},${red},${blue})`;
    body.style.backgroundColor = color;
}