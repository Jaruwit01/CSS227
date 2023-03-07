const iTime = document.querySelector('.time');

function setTime(){
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    iTime.innerHTML = `${hours<10 ?`0${houser}`:hours}:${minutes<10 ?`0${minutes}`:minutes}:${seconds<10 ?`0${seconds}`:seconds}`;
} 
setTime();
setInterval(setTime, 1000);