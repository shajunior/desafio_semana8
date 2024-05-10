// Generar un número aleatorio entre 1 y 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

let guessCount = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessField').value);
    const message = document.getElementById('message');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Por favor ingresa un número válido entre 1 y 100.';
        return;
    }

    guessCount++;

    if (userGuess === randomNumber) {
        message.textContent = `¡Acertaste! Solo utilizaste ${guessCount} intentos.`;
    } else if (userGuess < randomNumber) {
        message.textContent = 'No, mi número es mayor.';
    } else {
        message.textContent = 'No, mi número es menor.';
    }
}
