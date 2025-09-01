let circle_red = document.getElementById('circle_red');
let circle_yellow = document.getElementById('circle_yellow');
let circle_green = document.getElementById('circle_green');
let array = [circle_red, circle_yellow, circle_green];

let btn = document.getElementById('btn');
let start = false;

function start_it(){
    while(start){
        for (let i = 0; i < array.length; i++){
            let inter_Id = setInterval(()=>{
                if (i == 0){
                    circle_red.style.background = `red`;
                } else if (i == 1){
                    circle_yellow.style.background = `yellow`;
                } else if (i == 2){
                    circle_green.style.background = `green`;
                } else {
                    clearInterval(inter_Id);
                }
            },1000);
        }
        start = false;
        break;
    }
}

btn.addEventListener('click', () => {
    start = true;
    start_it();
});