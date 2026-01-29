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

let position = 0;

const moveBlock = () => {
    if (position < 448) {
        position += 2;
        childBlock.style.left = `${position}px`;

        setTimeout(moveBlock, 20);
    }
};
moveBlock();
// MOVE BLOCK