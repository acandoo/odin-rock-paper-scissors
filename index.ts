// my very overkill solution to rock paper scissors, please don't reference this!
(() => {
    function getComputerChoice() {
        const results = ["rock", "paper", "scissors"];
        const random = Math.floor(Math.random() * 3);
        return results[random];
    }

    function playRound(humanChoice, computerChoice, humanScore, computerScore) {
        const winOver = {
            rock: "paper",
            paper: "scissors",
            scissors: "rock",
        };

        switch (humanChoice.toLowerCase()) {
            case winOver[computerChoice]:
                humanScore++;
                break;
            case computerChoice:
                break;
            default:
                computerScore++;
        }
        return [humanScore, computerScore];
    }
    //  to make it even more overkill:
    let humanScore = 0;
    let computerScore = 0;
    const runningScoreElement = document.getElementById("score");
    ["rock", "paper", "scissors"].forEach((choice) => {
        document
            .getElementById(choice)
            ?.addEventListener("click", () => {
                [humanScore, computerScore] = playRound(
                    choice,
                    getComputerChoice(),
                    humanScore,
                    computerScore,
                );

                // Update the score in the HTML
                if (runningScoreElement) {
                    if (humanScore >= 5 || computerScore >= 5) {
                        if (humanScore > computerScore) {
                            runningScoreElement.innerText = "You win the game!";
                        } else if (computerScore > humanScore) {
                            runningScoreElement.innerText =
                                "Computer wins the game!";
                        }
                    } else {
                        runningScoreElement.innerText =
                            `Your score: ${humanScore}; Computer score: ${computerScore}`;
                    }
                }
            });
    });
})();
