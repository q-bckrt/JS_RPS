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