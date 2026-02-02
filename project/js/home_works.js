// GMAIL BLOCK
const gmailInput = document.getElementById('gmail_input');
const gmailButton = document.getElementById('gmail_button');
const gmailResult = document.getElementById('gmail_result');

const gmailRegex = /^(?=\.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{6,}@gmail.com$/;

gmailButton.addEventListener('click', () => {
    const email = gmailInput.value.trim();

    if (email === "") {
        gmailResult.textContent = "Введите email";
        gmailResult.style.color = "orange";
    } else if (email.length < 10) {
        gmailResult.textContent = "Слишком короткий email";
        gmailResult.style.color = "orange";
    } else if (gmailRegex.test(email)) {
        gmailResult.textContent = "правильный Gmail!";
        gmailResult.style.color = "green";
    } else {
        gmailResult.textContent = "Неправильный Gmail!";
        gmailResult.style.color = "red";
    }
});
// GMAIL BLOCK
// MOVE BLOCK
const childBlock = document.querySelector('.child_block');

let x = 0;
let y = 0;
const max = 448;

const moveBlock = () => {
    if (x < max && y === 0) {
        x++;
        childBlock.style.left = `${x}px`;
    } else if (x >= max && y < max) {
        y++;
        childBlock.style.top = `${y}px`;
    } else if (y >= max && x > 0) {
        x--;
        childBlock.style.left = `${x}px`;
    } else if (x === 0 && y > 0) {
        y--;
        childBlock.style.top = `${y}px`;
    }
    if (!(x === 0 && y === 0)) {
        setTimeout(moveBlock, 10);
    }
};
moveBlock();
// MOVE BLOCK
// watch block
const secondsBlock = document.querySelector('#seconds');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');

let seconds = 0;
let intervalId = null;

const updateTime = () => {
    seconds++;
    secondsBlock.textContent = seconds;
};

startBtn.addEventListener('click', () => {
    if (intervalId !== null) return;

    intervalId = setInterval(updateTime, 1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
});

resetBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    seconds = 0;
    secondsBlock.textContent = seconds;
});
// watch block