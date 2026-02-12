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
