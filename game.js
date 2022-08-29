// Get a random integer between 1 and 3, 
// then converts it to 'rock', 'paper' or 'scissors' and returns it.
function getComputerChoice(){
    switch(Math.floor(Math.random() * 3) + 1) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
        default:
            return false;
    }
}

function playRoundGui (e) {
    const usrHand = e.srcElement.textContent;
    const cmpHand = getComputerChoice();
    
    if (
        (usrHand === "rock" && cmpHand === "scissors")
        || (usrHand === "paper" && cmpHand === "rock")
        || (usrHand === "scissors" && cmpHand === "paper")
    ) {
        usrScore += 1;
        display_result.textContent = 
            `cmp: ${cmpHand} vs usr: ${usrHand} -> user wins!`;
    } else if (usrHand === cmpHand) {
        display_result.textContent = 
            `cmp: ${cmpHand} vs usr: ${usrHand} -> draw!`;
    } else {
        cmpScore += 1;
        display_result.textContent = 
            `cmp: ${cmpHand} vs usr: ${usrHand} -> computer wins!`;
    }
    display_score.textContent = `computer: ${cmpScore} - user: ${usrScore}`;
    if (usrScore === 5 || cmpScore === 5) {
        gameEndReset();
    }
}

function gameEndReset () {
    if (usrScore > cmpScore) {
        display_result.textContent = 'You win!';
    } else {
        display_result.textContent = 'You lose!';
    }
    usrScore = 0;
    cmpScore = 0;
}

let usrScore = 0;
let cmpScore = 0;
    
const display_result = document.querySelector('.dialog_box');
const display_score = document.querySelector('.score_box');

const btns = document.querySelectorAll('button');
btns.forEach(e => e.addEventListener("click", playRoundGui));