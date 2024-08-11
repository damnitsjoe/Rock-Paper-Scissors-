
let compChoices = ['rock', 'paper', 'scissors']
let humanScore = 0; 
let computerScore = 0; 



//Write logic to get computer choice. 
function getComputerChoice() {
    //have computer generte a random number associated with a choice
    return compChoices[Math.floor(compChoices.length * Math.random())];
}

//write logic for human player 
function getHumanChoice() {
    let choice = prompt('Make a choice: rock, paper, or scissors').toLowerCase();
    if (compChoices.includes(choice)) {
        return choice; // Return the valid choice
    } else {
        console.log('Invalid choice. Please choose rock, paper, or scissors.');
        return getHumanChoice(); // Prompt again if the choice is invalid
    }
}

// function to decide who wins based on choices. 
function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log('We have a tie!');
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log('You Win!');
        humanScore++;
    } else {
        console.log('Computer Wins!');
        computerScore++;
    }
}

function playGame() {
    // Get choices
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    // Display choices
    console.log('Computer chose:', computerChoice);
    console.log('You chose:', humanChoice);

    // Play a round and determine the winner
    playRound(computerChoice, humanChoice);

    // Display scores
    console.log('Human Score:', humanScore);
    console.log('Computer Score:', computerScore);
}

// Run the game
playGame();
playGame();
playGame();
playGame();
playGame();


    



    



