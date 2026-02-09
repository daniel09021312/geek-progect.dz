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

// characters block
const charactersList = document.querySelector('.characters-list');

const xhr = new XMLHttpRequest();
xhr.open('GET', "../data/characters.json", true); // путь к JSON

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            const characters = JSON.parse(xhr.responseText);
            characters.forEach(char => {
                const card = document.createElement('div');
                card.className = 'character-card';
                card.innerHTML = `
                <div class="character-photo">
                  <img src="${char.photo}" alt="${char.name}">
                </div>
                <h3 style="color: #ffcc00">${char.name}</h3>
                <p style="color: #ffcc00">Возраст: ${char.age}</p>
                <p style="color: #ffcc00">Рост: ${char.height} см</p>
                <p style="color: #ffcc00">Вес: ${char.weight} кг</p>
                <p style="color: #ffcc00">Цвет волос: ${char["hair-color"]}</p>
                `;
                charactersList.appendChild(card);
            });

        }
    }
};
xhr.send();


const xhrAny = new XMLHttpRequest();
xhrAny.open('GET', "../data/any.json", true);

xhrAny.onreadystatechange = function() {
    if (xhrAny.readyState === 4 && xhrAny.status === 200) {
        const data = JSON.parse(xhrAny.responseText);
        console.log("Данные из any.json:", data);
    }
};
xhrAny.send();