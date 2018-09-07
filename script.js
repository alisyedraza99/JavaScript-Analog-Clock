const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");



function RunTheClock() {

   /* hrPos += (3/360);
    minPos += (6/60); 
    secPos += 360/60; */
    var date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hrPos = hr*360/12 + (min*(360/60/12));
    let minPos = (min*360/60)+(sec*(360/60)/60);
    let secPos = sec*360/60;
    
    HOURHAND.style.transform = "rotate("+ hrPos + "deg)"
    MINUTEHAND.style.transform = "rotate("+ minPos + "deg)"
    SECONDHAND.style.transform = "rotate("+ secPos + "deg)"
}

var interval = setInterval(RunTheClock, 1000);