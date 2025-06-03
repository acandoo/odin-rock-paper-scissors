// my very overkill solution to rock paper scissors, please don't reference this!

function getComputerChoice() {
    const results = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return results[random];
}

// python's got nothing against this
const getHumanChoice = () => prompt("Enter choice:");

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    const winOver = {
        rock: "paper",
        paper: "scissors",
        scissors: "rock"
    }
    
    switch (humanChoice.toLowerCase()) {
        case winOver[computerChoice]:
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            break;
        case computerChoice:
            console.log("It's a tie!");
            break;
        default:
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
    }
    return [humanScore, computerScore];
}

const playGame = (() => {
    //  to make it even more overkill:
    //  let [humanScore, computerScore] = new Array(2).fill(0);
    let humanScore = computerScore = 0;
    for (const i of Array(5).keys()) {
        [humanScore, computerScore] = playRound(getHumanChoice(), getComputerChoice(), humanScore, computerScore);
    }
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
})();