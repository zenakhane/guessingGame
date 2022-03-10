const randomMathElem = document.querySelector('.randomMath');
const textElem = document.querySelector('.text');
let randomNumber = Math.ceil((Math.random() * 100));

let gameGuess = Game()

function guessingGame() {
    if (randomMathElem.value > randomNumber) {
        textElem.innerHTML = 'Your guess is too high &#128576';
    } else if (randomMathElem.value < randomNumber) {
        textElem.innerHTML = 'Your guess is too low &#128575';
    } else if (randomMathElem.value == randomNumber) {
        textElem.innerHTML = `Correct, the secret number is ${randomNumber}  &#128513`;
        setTimeout(function() {
            textElem.innerHTML = 'New game started! '
            randomNumber = Math.ceil((Math.random() * 100));
        }, 3000)
    }
}