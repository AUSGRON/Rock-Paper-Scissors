// 1. DATA & DOM SELECTION
let userScore = 0; // Tracks the player's score
let compScore = 0; // Tracks the computer's score

// Grabbing elements from the HTML so we can interact with them
const choices = document.querySelectorAll(".choice"); // The 3 buttons/images
const msg = document.querySelector("#msg");          // The message banner (Win/Loss/Tie)
const userScorePara = document.querySelector("#user-score"); // Where we display player score
const compScorePara = document.querySelector("#comp-score"); // Where we display computer score

// 2. GENERATE COMPUTER CHOICE
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    // Math.random() gives a number between 0-1. 
    // Multiplying by 3 and using floor gives us 0, 1, or 2 (perfect for array indexes)
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]; // Returns "rock", "paper", or "scissors"
}

// 3. HANDLING A DRAW
const drawGame = () => {
    msg.innerText = "Game Was A Tie"; 
    msg.style.backgroundColor = "#daa520"; // Changes banner to gold color
}

// 4. HANDLING THE WINNER
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++; // Increase player score by 1
        userScorePara.innerText = userScore; // Update the UI
        msg.innerText = `You Win! Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++; // Increase computer score by 1
        compScorePara.innerText = compScore; // Update the UI
        msg.innerText = `You Lose! ${compChoice} Beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

// 5. THE MAIN GAME ENGINE
const playGame = (userChoice) => {
    const compChoice = genCompChoice(); // Get the computer's move

    if (userChoice === compChoice) {
        drawGame(); // If moves are the same, it's a tie
    } else {
        let userWin = true; // We start by assuming the user won, then check conditions

        if (userChoice === "rock") {
            // If user has Rock, they only lose if Computer has Paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // If user has Paper, they only lose if Computer has Scissors   
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // If user has Scissors, they only lose if Computer has Rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice); // Update the screen
    }
}

// 6. INITIALIZING THE GAME
// This adds an "EventListener" to every choice button
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        // We assume the ID of the HTML element is "rock", "paper", or "scissors"
        const userChoice = choice.getAttribute("id");
        playGame(userChoice); // Start the logic!
    });
});