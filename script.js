const hrs = document.getElementById("hours");
const min = document.getElementById("minutes");
const sec = document.getElementById("seconds");
const startButton = document.getElementById("start")

let timer;

let hours = 0;
let minutes = 0;
let seconds = 0;

var lapCount = 1;

function updateTime(){
    seconds++;
    if (seconds>=60){
        minutes++;
        seconds=0;
    }
    if (minutes>=60){
        hours++;
        minutes=0;
        }


    hrs.textContent = hours? (hours>9? hours : "0"+hours) : "00";
    min.textContent = minutes? (minutes>9? minutes : "0"+minutes) : "00";
    sec.textContent = seconds? (seconds>9? seconds : "0"+seconds) : "00";

    start();
}

function start(){
    timer = setTimeout(updateTime,1000);
    startButton.disabled = true;
}

function stop(){
    clearTimeout(timer);
    startButton.disabled = false;
}

function reset(){
    seconds = 0;
    minutes = 0;
    hours = 0;

    hrs.textContent = "00";
    min.textContent = "00";
    sec.textContent = "00";

    stop();
    lapReset();
}

var list = document.getElementById('para')

function lap(){
    
    if (lapCount<=5){
        
        var para1 = document.createElement("li");
        var lap1 = document.createTextNode("Lap "+lapCount+" = "+hours+" : "+minutes+" : "+seconds);
        para1.appendChild(lap1);
        list.appendChild(para1);
        lapCount++;
    }
}

function lapReset(){
    lapCount=1;
    
    while(list.hasChildNodes()){
        list.removeChild(list.firstChild);
    }

}
