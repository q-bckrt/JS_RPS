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

// Ask the user to input 'rock', 'paper' or 'scissors' and returns it if valid,
// otherwise keep prompting until it is.
function getUserChoice(){
    let userChoice = "";

    while (true) {
        userChoice = prompt("rock, paper or scissors?").toLowerCase().trim();
        if (
            userChoice === "rock"
             || userChoice === "paper" 
             || userChoice === "scissors"
             ) {
                return userChoice;
        }
         console.log("please enter a valid choice ('rock', 'paper' or 'scissors')")
    }
}

// Runs a single round of the game.
function playRound(btns) {
    // console.log("3, 2, 1,... Go!");
    // userHand = getUserChoice();
    // computerHand = getComputerChoice();

    // console.log(`you played ${userHand}, computer played ${computerHand}`);
/*
    if (
        (userHand === "rock" && computerHand === "scissors")
        || (userHand === "paper" && computerHand === "rock")
        || (userHand === "scissors" && computerHand === "paper")
    ) {
        console.log("user wins!")
        return 1;
    } else if (userHand === computerHand) {
        console.log("draw!");
        return 0;
    } else {
        console.log("computer wins!")
        return 2;
    }
    */
}

// Run a full game that consists of five round.
// Count the scores and determine a winner, or if it's a draw.
function game() {

    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        switch (playRound()) {
            case 0:
                break;
            case 1:
                userScore++;
                break;
            case 2:
                computerScore++;
                break;
            default:
                console.log('an error occured.');
                return;
        }
    }

    if (userScore > computerScore) {
        console.log("You win!");
    } else if (userScore < computerScore) {
        console.log("Computer wins!");
    } else {
        console.log("It's a draw!")
    }
}



// Main
const btns = document.querySelectorAll('button');

function playRoundGui (e) {
    const computerHand = getComputerChoice();
    const userHand = e.srcElement.textContent;
    const display = document.querySelector(".dialog_box");
    
    if (
        (userHand === "rock" && computerHand === "scissors")
        || (userHand === "paper" && computerHand === "rock")
        || (userHand === "scissors" && computerHand === "paper")
    ) {
        console.log("user wins!")
        display.textContent = `cmp: ${computerHand} vs usr: ${userHand} --> user wins!`;
        return 1;
    } else if (userHand === computerHand) {
        console.log("draw!");
        display.textContent = `cmp: ${computerHand} vs usr: ${userHand} --> draw!`;
        return 0;
    } else {
        console.log("computer wins!")
        display.textContent = `cmp: ${computerHand} vs usr: ${userHand} --> computer wins!`;
        return 2;
    }

}

btns.forEach(e => e.addEventListener("click", playRoundGui));


// while(true) {
    // playRound(btns);
// }
// btns.forEach(e => e.addEventListener("click", () => console.log("Hello!")));
//game();