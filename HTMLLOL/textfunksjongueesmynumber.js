const minNumber = 1;
const maxNumber = 100;
let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

function stuff() {
    const guessInput = document.getElementById("guessInput");
    const nr = parseInt(guessInput.value);
    if (nr===randomNumber) {
    setMessage(`Congratulations! You guessed the correct number ${randomNumber}`);
    }
    else if (nr<randomNumber) {setMessage(`Too Low`);}
    else if (nr>randomNumber) {setMessage(`Too High`);}
}
function setMessage(message) {
            const messageElement = document.getElementById("message");
            messageElement.textContent = message;
}