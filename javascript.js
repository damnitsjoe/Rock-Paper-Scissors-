
let compChoices = ["rock", 'paper', 'scissors']

//Write logic to get computer choice. 
function getComputerChoice() {
    //have computer generte a random number associated with
    return compChoices[Math.floor(compChoices.length * Math.random())];
}
//write logic for human player 
function getHumanChoice() {
//input for human player to choose between R, P, S. 
    let choice = prompt(compChoices);
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
    }
    
}
//figure out how to let humans input their choice and return a result 
console.log(compChoices);
getHumanChoice();
console.log(getComputerChoice());