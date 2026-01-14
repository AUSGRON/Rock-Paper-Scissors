# Rock-Paper-Scissors
Who Doesn't Like Rock,Paper,Scissor And It Would Be More Fun If U Had A Competitor 


# Rock Paper Scissors - Logic & DOM Practice

I built this to get a solid handle on JavaScript game logic and DOM manipulation. Instead of just making a static page, I wanted to create something interactive where the "AI" (computer) actually makes random decisions.

## How the Logic Works
The main challenge was handling the win/loss conditions without writing messy code. I used a mix of array indexing and ternary operators to keep the logic lean.

* **The Computer's Brain:** I used `Math.random()` to pick a random index from a "rock, paper, scissors" array.
* **Smart Comparisons:** Rather than 50 different 'if' statements, I structured the game to check for draws first, then evaluate the specific win/loss scenarios.
* **Real-time Feedback:** The UI updates instantly—changing colors and text based on the result so the user knows exactly what happened.

## Tech Used
- **Vanilla JavaScript:** Focused on Event Listeners and clean Boolean logic.
- **CSS3:** Used Flexbox for centering and added smooth transitions on hover to give it a more "premium" feel.
- **HTML5:** Semantic structure with clear IDs for JS targeting.

## My Takeaway
The biggest win for me on this project was debugging the comparison operators. It really clicked for me how JavaScript handles 'true' and 'false' values within conditional blocks. 

## What I'm working on next:
- Adding a "Reset Game" button to clear the scoreboard.
- Adding sound effects for wins and losses.
- Transitioning these logic skills into a Currency Converter app.
