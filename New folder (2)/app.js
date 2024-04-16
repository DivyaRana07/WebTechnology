const p1 = document.querySelector('#player1');
const p2 = document.querySelector('#player2');
const play = document.querySelector('#play');
const onebtn = document.querySelector('#onebtn');
const twobtn = document.querySelector('#twobtn');
const reset = document.querySelector('#reset');

let isGameOver = false;
play.addEventListener('change', () => {
    p1.innerText = '0';
    p2.innerText = '0';
    isGameOver = false;
    p1.style.color='black';
    p2.style.color='black';
});
onebtn.addEventListener('click', () => {
    if (!isGameOver) {
        p1.innerText = (parseInt(p1.innerText) + 1).toString();
        if (parseInt(p1.innerText) === parseInt(play.value)) {
            isGameOver = true;
            p1.style.color = "green";
            p2.style.color = "red";
        }
    }
});

twobtn.addEventListener('click', () => {
    if (!isGameOver) {
        p2.innerText = (parseInt(p2.innerText) + 1).toString();
        if (parseInt(p2.innerText) === parseInt(play.value)) {
            isGameOver = true;
            p2.style.color = "green";
            p1.style.color = "red";
        }
    }
});

reset.addEventListener('click', () => {
    p1.innerText = '0';
    p2.innerText = '0';
    isGameOver = false;
    p1.style.color='black';
    p2.style.color='black';
});