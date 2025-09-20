let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let clock = ``;

function start() {
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes; // Corrected here
    seconds = seconds < 10 ? "0" + seconds : seconds;

    clock = `${hours}:${minutes}:${seconds}`;
    console.log(clock);

    // Update the clock every second
    setTimeout(start, 1000);
}

start();