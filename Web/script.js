const btn = document.getElementById('btn');
const time = document.getElementById('time');
const txt = document.getElementById('txt');


txt.addEventListener('onkeydown', () => {
    time.innerHTML = `Date: ${displayDate()}`;  
});

