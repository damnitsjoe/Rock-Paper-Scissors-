
let compChoices = ['rock', 'paper', 'scissors']
let humanScore = 0; 
let computerScore = 0; 
let choice = prompt('Rock, Paper or Sicssors');

//Write logic to get computer choice. 
function getComputerChoice() {
    //have computer generte a random number associated with a choice
    return compChoices[Math.floor(compChoices.length * Math.random())];
}

//write logic for human player 
function getHumanChoice() {
//input for human player to choose between R, P, S. 
    switch (choice) {
        //human choices
        case 'rock':
            console.log('you chose rock')
        break; 
        case 'paper':
            console.log('you chose paper')
        break; 
        case 'scissors':
            console.log('you chose scissors')
        break; 
        default: 
            console.log('you left the answer blank')
        break;
    }}

//logic function to decide who wins based on choices. 
function playRound() {
    if (getHumanChoice == getComputerChoice) {
        console.log('We have a tie!');
    } else if (
    //else if for winning/losing pairs
        (getHumanChoice === 'rock' && getComputerChoice === 'scissors') ||
        (getHumanChoice === 'scissors' && getComputerChoice === 'paper') ||
        (getHumanChoice === 'paper' && getComputerChoice === 'rock')
    ){
        console.log('You Win!');
    } else {
        console.log('Computer Wins!')
    }
    }


    

//figure out how to let humans input their choice and return a result 
console.log(compChoices);
getHumanChoice(choice);
getComputerChoice();
console.log(getComputerChoice());
playRound(getComputerChoice, getHumanChoice);