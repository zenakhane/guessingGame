const randomMathElem = document.querySelector('.randomMath');
const textElem = document.querySelector('.text');
const randomNumber = Math.ceil((Math.random() * 100));





function guessingGame() {
    if (randomMathElem.value > randomNumber) {
        textElem.innerHTML = 'Your guess is too high';
    }

    else if (randomMathElem.value < randomNumber) {
        textElem.innerHTML = 'Your guess is too low';
    }

    else {
        textElem.innerHTML = `Correct, the secret number is ${randomNumber}`;
        
    }
}
