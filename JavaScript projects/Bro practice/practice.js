function getRadius(){
    let r = document.getElementById("radius").value;
    let result = (2*3.142*Number(r));
    window.alert(`Circumeference is: ${result}`);
}
let target = 0;
function increase(){
    target++;
    document.getElementById("target").textContent = target;
}
function decrease(){
    target--;
    document.getElementById("target").textContent = target;
}
function startOver(){
    target = 0;
    document.getElementById("target").textContent = target;
}
function roll(){
    let MIN = 1;
    let MAX = 6;
    let result1 = Math.floor((Math.random() * MAX) + MIN);
    let result2 = Math.floor((Math.random() * MAX) + MIN);
    document.getElementById("res").textContent = result1+result2;
    document.getElementById("first").textContent = result1;
    document.getElementById("second").textContent = result2;  
}
/*
    let num = Math.floor((Math.random() * 100) + 1);
    let running = true;
    let attempts = 10;
    while(running==true){
        if(attempts != 0){
        let guess = window.prompt("What number am i thinking of?");
            if(guess < num){
                window.alert("Too low!");
            }else if(guess > num){
                window.alert("Too high!");
            }else{
                window.alert("You guessed right");
                break;
            }
        }else{
            running = false;
        }
        attempts--;
    }
*/
function getTemp(){
    let temp = document.getElementById("temp").value;
    let far = (temp * 9/5) + 32;
    let cel = (temp - 32)/(9/5);
    let resdisplay = document.getElementById("result");
    let convertToFar = document.getElementById("converToFar");
    let convertToCel = document.getElementById("converToCel");
    if(convertToFar.checked&&temp!=""){
        resdisplay.value = far.toFixed(1)+"°F";
    }else if(convertToCel.checked&&temp!=""){
        resdisplay.value = cel.toFixed(1)+"°C";
    }else{
        window.alert("Invalid input!");
    }
}
