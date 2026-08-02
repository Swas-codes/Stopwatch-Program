const clock = document.getElementById("clock");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const stopButton = document.getElementById("stop");

let timer=null;
let elapsedTime=0;
let startTime=0;
let isRunning=false;

startButton.onclick = function() {
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update,10);
        isRunning = true;
    }
}
resetButton.onclick = function() {
    clearInterval(timer);
    elapsedTime=0;
    startTime=0;
    isRunning=false;
    clock.textContent="00:00:00:00";
}
stopButton.onclick = function() {
    if(isRunning){
        clearInterval(timer);
        elapsedTime=Date.now() - startTime;
        isRunning=false
    }

}
function update() {
    const currentTime=Date.now();
    elapsedTime= currentTime-startTime;

    let hours= Math.floor(elapsedTime/(1000*60*60));
    let miniutes= Math.floor(elapsedTime/(1000*60) %60);
    let seconds= Math.floor(elapsedTime/1000 % 60);
    let miliseconds= Math.floor(elapsedTime % 1000 /10 );

    hours=String(hours).padStart(2,"0");
    miniutes=String(miniutes).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");
    miliseconds=String(miliseconds).padStart(2,"0");

    clock.textContent=`${hours}:${miniutes}:${seconds}:${miliseconds}`;

}
