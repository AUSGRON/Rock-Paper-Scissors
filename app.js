```javascript
// ===============================
// GAME STATE
// ===============================

let userScore = 0;
let compScore = 0;
let round = 1;


// ===============================
// DOM ELEMENTS
// ===============================

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara =
    document.querySelector("#user-score");

const compScorePara =
    document.querySelector("#comp-score");

const roundElement =
    document.querySelector("#round");

const resultIcon =
    document.querySelector("#result-icon");


// ===============================
// COMPUTER MOVE
// ===============================

const genCompChoice = () => {

    const options = [
        "rock",
        "paper",
        "scissors"
    ];

    const randomIndex =
        Math.floor(
            Math.random() * options.length
        );

    return options[randomIndex];
};


// ===============================
// RESULT MESSAGE
// ===============================

const showResult = (
    text,
    type
) => {

    msg.innerText = text;


    if (type === "win") {

        msg.style.color = "#86efac";

        resultIcon.innerText = "🏆";

        resultIcon.style.background =
            "rgba(34,197,94,.1)";

        resultIcon.style.borderColor =
            "rgba(34,197,94,.25)";
    }


    else if (type === "lose") {

        msg.style.color = "#fca5a5";

        resultIcon.innerText = "💀";

        resultIcon.style.background =
            "rgba(239,68,68,.1)";

        resultIcon.style.borderColor =
            "rgba(239,68,68,.25)";
    }


    else {

        msg.style.color = "#fcd34d";

        resultIcon.innerText = "⚡";

        resultIcon.style.background =
            "rgba(245,158,11,.1)";

        resultIcon.style.borderColor =
            "rgba(245,158,11,.25)";
    }
};


// ===============================
// DRAW
// ===============================

const drawGame = () => {

    showResult(
        "It's a tie — try again!",
        "draw"
    );
};


// ===============================
// WINNER
// ===============================

const showWinner = (
    userWin,
    userChoice,
    compChoice
) => {

    if (userWin) {

        userScore++;

        userScorePara.innerText =
            userScore;

        showResult(
            `Victory! ${userChoice} beats ${compChoice}`,
            "win"
        );

    } else {

        compScore++;

        compScorePara.innerText =
            compScore;

        showResult(
            `Defeat! ${compChoice} beats ${userChoice}`,
            "lose"
        );
    }
};


// ===============================
// GAME ENGINE
// ===============================

const playGame = (userChoice) => {

    const compChoice =
        genCompChoice();


    if (userChoice === compChoice) {

        drawGame();

    } else {

        let userWin;


        if (userChoice === "rock") {

            userWin =
                compChoice === "scissors";

        }


        else if (userChoice === "paper") {

            userWin =
                compChoice === "rock";

        }


        else {

            userWin =
                compChoice === "paper";
        }


        showWinner(
            userWin,
            userChoice,
            compChoice
        );
    }


    round++;

    roundElement.innerText =
        round;
};


// ===============================
// CLICK EVENTS
// ===============================

choices.forEach(choice => {

    choice.addEventListener(
        "click",
        () => {

            const userChoice =
                choice.id;


            // Click animation
            choice.animate(
                [
                    {
                        transform: "scale(1)"
                    },
                    {
                        transform: "scale(.92)"
                    },
                    {
                        transform: "scale(1)"
                    }
                ],
                {
                    duration: 180,
                    easing: "ease-out"
                }
            );


            playGame(userChoice);
        }
    );

});
```
