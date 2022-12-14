function toggleGameInterface () {
    display_result.classList.toggle('hideSection');
    display_score.classList.toggle('hideSection');
    buttons_box.classList.toggle('hideSection');

    playBtn.classList.toggle('hideSection');
}

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

function getUserChoice(e) {
    if (e.srcElement.classList[0] === 'btn_rock') {
        return 'rock';
    } else if (e.srcElement.classList[0] === 'btn_paper') {
        return 'paper';
    } else if (e.srcElement.classList[0] === 'btn_scissors') {
        return 'scissors';
    } else {
        return 'error';
    }
}

function playRoundGui (e) {
    const usrHand = getUserChoice(e);
    const cmpHand = getComputerChoice();

    if (
        (usrHand === "rock" && cmpHand === "scissors")
        || (usrHand === "paper" && cmpHand === "rock")
        || (usrHand === "scissors" && cmpHand === "paper")
    ) {
        usrScore += 1;
        display_result.textContent = 
            `cmp: ${usrHand} vs usr: ${cmpHand} -> user wins!`;
    } else if (usrHand === cmpHand) {
        display_result.textContent = 
            `cmp: ${usrHand} vs usr: ${cmpHand} -> draw!`;
    } else {
        cmpScore += 1;
        display_result.textContent = 
            `cmp: ${usrHand} vs usr: ${cmpHand} -> computer wins!`;
    }
    display_score.textContent = `${usrScore} - ${cmpScore}`;
    if (usrScore === 5 || cmpScore === 5) {
        gameReset(true);
    }
}

function gameReset (again) {
    display_result.textContent = '';
    display_score.textContent = '0 - 0';
    toggleGameInterface();


    const resultNode = document.querySelector('h2');
    // const contentNode = document.querySelector('.content');

    if (usrScore === 5) {
        resultNode.classList.remove('hideSection')
        resultNode.textContent = 'YOU WIN!';
        console.log("NEEEE");
    } else if (cmpScore === 5) {
        resultNode.classList.remove('hideSection')
        resultNode.textContent = 'YOU LOSE!';
        console.log("AAAAH");
    } else {
        console.log("HELLO");
        resultNode.classList.add('hideSection')
    }
    usrScore = 0;
    cmpScore = 0;
    playBtn.textContent = 'Play Again?';
}


// MAIN
let usrScore = 0;
let cmpScore = 0;

const display_result = document.querySelector('.dialog_box');
const display_score = document.querySelector('.score_box');
const buttons_box = document.querySelector('.buttons_box');

const btns = document.querySelectorAll('div.buttons_box > img');
btns.forEach(e => e.addEventListener("click", playRoundGui));

const playBtn = document.querySelector(".play_btn");
playBtn.addEventListener("click", () => gameReset(true));