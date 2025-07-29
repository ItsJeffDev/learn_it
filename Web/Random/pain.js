const btn = document.getElementById('btn');
let txt = document.getElementById('txt');
const damn = document.getElementById('damn');
const image = document.getElementById("image");


btn.addEventListener('click', () => {
    let name = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${txt.value.trim()}`;
    image.src =  name;
    console.log(name);
});
