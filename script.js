const gameAnswers = [
    "Rock",
    "Paper",
    "Scissors"
];
const playerSelection = playerChoice();
const computerSelection = computerPlay();
let playerWins = 0;
document.getElementById("playerWins").innerHTML = "Player has won " + playerWins + " times";
let computerWins = 0;
document.getElementById("computerWins").innerHTML = "Computer has won " + computerWins + " times";

//Function to get the computers choice
function computerPlay () {
    const answer = gameAnswers[Math.floor(Math.random()*gameAnswers.length)];
    console.log ("Computer answer is " + answer);
    return answer;
}

//Function to get the players choice from webpage drop down
function playerChoice() {
    const playerAnswer = document.querySelector('#playerValue').value;
    console.log ("Player answer is "+ playerAnswer);
    return playerAnswer.charAt(0).toUpperCase() + playerAnswer.slice(1).toLowerCase();
}


/*Function to play a single round

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper"))
    {
        return "Computer chose " + computerSelection + ", Player chose " + playerSelection + ", therefore Player wins!";
    } else if ((computerSelection == "Rock" && playerSelection == "Scissors") ||
    (computerSelection == "Paper" && playerSelection == "Rock") ||
    (computerSelection == "Scissors" && playerSelection == "Paper")) {
        return "Computer chose " + computerSelection + ", Player chose " + playerSelection + ", therefore Computer wins!";
    }
}
*/

//Version 2 of function to play a single round and display results in HTML
function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper"))
    {
        document.getElementById("playerWins").innerHTML = "Player has won " + (playerWins + 1)  + " times";
        console.log ("Computer chose " + computerSelection + ", Player chose " + playerSelection + ", therefore Player wins!");
        document.getElementById("roundWinner").innerHTML = "Computer chose " + computerSelection + ", Player chose " + playerSelection + ", therefore Player wins!";
        return "player";
    } else if 
    ((computerSelection == "Rock" && playerSelection == "Scissors") ||
    (computerSelection == "Paper" && playerSelection == "Rock") ||
    (computerSelection == "Scissors" && playerSelection == "Paper")) 
    {
        document.getElementById("computerWins").innerHTML = "Computer has won " + (computerWins + 1)  + " times";
        console.log ("Computer chose " + computerSelection + ", Player chose " + playerSelection + ", therefore Computer wins!");
        document.getElementById("roundWinner").innerHTML = "Computer chose " + computerSelection + ", Player chose " + playerSelection + ", therefore Computer wins!";
        return "computer";
    } else if
    (computerSelection == playerSelection)
    {
        console.log ("Computer chose " + computerSelection + ", Player chose " + playerSelection + ", therefore it's a TIE!");
        document.getElementById("roundWinner").innerHTML = "Computer chose " + computerSelection + ", Player chose " + playerSelection + ", therefore it's a TIE!";
        return "tie";
    }
}

function playerPrompt() {
    let playerGuess = prompt("Enter your Choice (Rock, Paper or Scissors");
    return document.getElementById("playerGuess").innerHTML = playerGuess;
}

//Function to create a game of first to 5 wins
function game() {
    while (playerWins < 5 || computerWins < 5) {
       let round = playRound(playerChoice(), computerSelection);
       console.log ("The computer selected - " + computerSelection);
       console.log ("Round result is " + round);
        if (round == "computer")
       {
        computerWins++;
        console.log (round + " wins - Computer");
       } else if (round == "player")
       {
        playerWins++;
        console.log (round + " wins - Player");
       } else if (round == "tie")
       {
           console.log ("No-one wins this time around");
       }
    break
    }
}

