// ================================
// GAME DATA
// ================================

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


// ================================
// COMPUTER CHOICE
// ================================

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * options.length);

    return options[randIdx];
};


// ================================
// MESSAGE STYLING
// ================================

const setMessage = (text, type) => {

    msg.innerText = text;

    if (type === "win") {
        msg.style.backgroundColor = "rgba(34, 197, 94, 0.12)";
        msg.style.borderColor = "rgba(34, 197, 94, 0.35)";
        msg.style.color = "#86efac";
    }

    else if (type === "lose") {
        msg.style.backgroundColor = "rgba(239, 68, 68, 0.12)";
        msg.style.borderColor = "rgba(239, 68, 68, 0.35)";
        msg.style.color = "#fca5a5";
    }

    else {
        msg.style.backgroundColor = "rgba(245, 158, 11, 0.12)";
        msg.style.borderColor = "rgba(245, 158, 11, 0.35)";
        msg.style.color = "#fcd34d";
    }
};


// ================================
// DRAW
// ================================

const drawGame = () => {
    setMessage("Game Was A Tie", "draw");
};


// ================================
// WINNER
// ================================

const showWinner = (userWin, userChoice, compChoice) => {

    if (userWin) {

        userScore++;

        userScorePara.innerText = userScore;

        setMessage(
            `You Win! ${userChoice} beats ${compChoice}`,
            "win"
        );

    } else {

        compScore++;

        compScorePara.innerText = compScore;

        setMessage(
            `You Lose! ${compChoice} beats ${userChoice}`,
            "lose"
        );
    }
};


// ================================
// MAIN GAME
// ================================

const playGame = (userChoice) => {

    const compChoice = genCompChoice();

    if (userChoice === compChoice) {

        drawGame();

    } else {

        let userWin;

        if (userChoice === "rock") {
            userWin = compChoice === "scissors";
        }

        else if (userChoice === "paper") {
            userWin = compChoice === "rock";
        }

        else {
            userWin = compChoice === "paper";
        }

        showWinner(userWin, userChoice, compChoice);
    }
};


// ================================
// CLICK EVENTS
// ================================

choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        const userChoice = choice.getAttribute("id");

        // Small click animation
        choice.style.transform = "scale(0.94)";

        setTimeout(() => {
            choice.style.transform = "";
        }, 120);

        playGame(userChoice);
    });

});
