const txt = document.getElementById('txt');
const btn = document.getElementById('btn');
const items = document.getElementById('items');

btn.addEventListener('click', () => {
    if (txt.value == ""){
        alert("Please Add Input!");
    } else {
        add();
    }
});


function add() {
    let para = document.createElement('li');
    let node = document.createTextNode(txt.value);
    para.appendChild(node);

    items.appendChild(para);
}
