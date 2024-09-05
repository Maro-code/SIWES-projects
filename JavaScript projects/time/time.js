function getTime(){
    const now = new Date(); 
    let hours = now.getHours().toString().padStart(2, 0);
    const meridem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timestring = `${hours}:${minutes}:${seconds}`;
    document.getElementById("time").textContent = timestring;
}
getTime();
setInterval(getTime, 1000);

const watch = document.getElementById("stopwatch");
let timer = null;
let startTime =0;
let elapsedTime = 0;
let isRunning = false;
function start(){
      if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
      }
}

function stop(){
    
}