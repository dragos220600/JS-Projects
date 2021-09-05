let userScore = 0;
let computerScore = 0;
const userScore_span = document.querySelector("#user-score");
const compScore_span = document.querySelector("#comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.querySelector("#r");
const paper_div = document.querySelector("#p");
const scissors_div = document.querySelector("#s");


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const random = Math.floor(Math.random() * 3);

    return choices[random];
}

function convertToWord(letter) {
    switch (letter) {
        case 'r':
            return "Rock";
        case 'p':
            return "Paper";
        case 's':
            return "Scissors";
    }
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)}(user) beats ${convertToWord(computerChoice)}(computer). You win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove('green-glow');
    }, 350);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}(user) loses ${convertToWord(computerChoice)}(computer). You lose!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove('red-glow');
    }, 350);
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = 'It is a draw';
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove('grey-glow');
    }, 350);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
            win(userChoice, computerChoice);
            break;
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'pr':
            win(userChoice, computerChoice);
            break;
        case 'rp':
            lose(userChoice, computerChoice);
            break;
        case 'ps':
            lose(userChoice, computerChoice);
            break;
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        case 'rr':
            draw(userChoice, computerChoice);
            break;
        case 'pp':
            draw(userChoice, computerChoice);
            break;
        case 'ss':
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game('r');
    });

    paper_div.addEventListener('click', function() {
        game('p');
    });

    scissors_div.addEventListener('click', function() {
        game('s');
    });
}

main();
