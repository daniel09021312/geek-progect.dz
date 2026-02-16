// tab slider






// conventer
const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const eurInput = document.querySelector('#eur');

const conventer = (element) => {
    element.oninput = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', '../data/conventer.json');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send();

        xhr.onload = () => {
            const data = JSON.parse(xhr.response);

            if (element.value === '') {
                somInput.value = '';
                usdInput.value = '';
                eurInput.value = '';
                return;
            }
            if (element.id === 'som') {
                usdInput.value = (element.value / data.usd).toFixed(2);
                eurInput.value = (element.value / data.eur).toFixed(2);
            }
            if (element.id === 'usd') {
                somInput.value = (element.value * data.usd).toFixed(2);
                eurInput.value = ((element.value * data.usd) / data.eur).toFixed(2);
            }
            if (element.id === 'eur') {
                somInput.value = (element.value * data.eur).toFixed(2);
                usdInput.value = ((element.value * data.eur) / data.usd).toFixed(2);
            }
        }
    }
}

conventer(somInput);
conventer(usdInput);
conventer(eurInput);


// Card Switcher

const card = document.querySelector('.card');
const btnNext = document.querySelector('#btn-next');
const btnPrev = document.querySelector('#btn-prev');
let cardId = 1;

function loadCard(id) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then(data => {
            const { title, id, completed } = data;
            const compliteTitle = completed ? 'Выполнено' : 'Не выполнено';
            const compliteColor = completed ? 'green' : 'red';

            card.innerHTML = `
                <p>${title}</p>
                <p style="color: ${compliteColor}">${compliteTitle}</p>
                <span>${id}</span>
            `;
        });
}

btnNext.onclick = () => {
    cardId++;
    if (cardId > 200) cardId = 1;
    loadCard(cardId);
}

btnPrev.onclick = () => {
    cardId--;
    if (cardId < 1) cardId = 200;
    loadCard(cardId);
}

loadCard(cardId);
