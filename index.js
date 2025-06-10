// my very overkill solution to rock paper scissors, please don't reference this!
(function () {
    function getComputerChoice() {
        var results = ["rock", "paper", "scissors"];
        var random = Math.floor(Math.random() * 3);
        return results[random];
    }
    function playRound(humanChoice, computerChoice, humanScore, computerScore) {
        var winOver = {
            rock: "paper",
            paper: "scissors",
            scissors: "rock",
        };
        switch (humanChoice.toLowerCase()) {
            case winOver[computerChoice]:
                console.log("You win! ".concat(humanChoice, " beats ").concat(computerChoice));
                humanScore++;
                break;
            case computerChoice:
                console.log("It's a tie!");
                break;
            default:
                console.log("You lose! ".concat(computerChoice, " beats ").concat(humanChoice));
                computerScore++;
        }
        return [humanScore, computerScore];
    }
    //  to make it even more overkill:
    var humanScore = 0;
    var computerScore = 0;
    var runningScoreElement = document.getElementById("score");
    ["rock", "paper", "scissors"].forEach(function (choice) {
        var _a;
        console.log(choice);
        (_a = document
            .getElementById(choice)) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
            var _a;
            _a = playRound(choice, getComputerChoice(), humanScore, computerScore), humanScore = _a[0], computerScore = _a[1];
            // Update the score in the HTML
            if (runningScoreElement) {
                if (humanScore >= 5 || computerScore >= 5) {
                    if (humanScore > computerScore) {
                        runningScoreElement.innerText = "You win the game!";
                    }
                    else if (computerScore > humanScore) {
                        runningScoreElement.innerText =
                            "Computer wins the game!";
                    }
                }
                else {
                    runningScoreElement.innerText =
                        "Your score: ".concat(humanScore, "; Computer score: ").concat(computerScore);
                }
            }
        });
    });
})();
