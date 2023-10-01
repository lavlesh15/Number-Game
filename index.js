const submitbtn = document.querySelector('#submit-btn');
const form = document.querySelector('#form');
const input = document.querySelector('#guessed-Number');
const hintPara = document.querySelector('.hint');
const attemptPara = document.querySelector('.Attempts');
const guessesPara = document.querySelector('.guesses');
const startbtn = document.getElementById('startbtn');

let RandomNum = Math.floor(Math.random() * 10 + 1);
let attempt = 1;
let totalAttempt = 11;
let guesses = [];
let guess;

let stillOn = true;


const DisplayMessage = (message) => {

    hintPara.textContent = message
    attemptPara.innerHTML = `Remaining Attempt ${totalAttempt - attempt}`
}


const checkNumber = (guess) => {
    if (guess == RandomNum) {
        DisplayMessage('You Won The Game!!');
        EndGame();
    }
    else if (guess < RandomNum) {
        DisplayMessage('Lesser than Goal')
    }
    else if (guess > RandomNum) {
        DisplayMessage('Greater Than Goal')
    }
}


console.log(RandomNum);

const formListener = form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (attempt == 11) {
        EndGame();
    }

    if (stillOn) {
        guess = input.value;
        attempt++;
        guesses.push(input.value);
        guessesPara.innerHTML += `${input.value} - `
        checkNumber(input.value);
    }

})

const EndGame = () => {

    submitbtn.setAttribute('Disbaled', '');

    if (input.value !== RandomNum && attempt == 11) {
        DisplayMessage(`Game Over!! Goal Number was ${RandomNum}`);

    }
    startbtn.classList.remove('start');
    console.log(guesses);
    guesses = [];
    stillOn = false;
}

const startGame = () => {
    RandomNum = Math.floor(Math.random() * 10 + 1);
    submitbtn.removeAttribute('Disabled')
    attemptPara.innerHTML = 'Attempts : 10'
    hintPara.innerHTML = ''
    guessesPara.innerHTML = ''
    input.value = '';
    guesses = [];
    stillOn = true
    startbtn.classList.add('start');
    attempt = 1;
}

startbtn.addEventListener('click', startGame);


