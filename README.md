# 🪨📄✂️ Rock, Paper, Scissors

*A hands-on practice project in JavaScript logic and DOM manipulation.*

🔴 **[Play it live](https://rock-paper-scissors-dvk861lox-ausgrons-projects.vercel.app)**

**Everyone loves Rock, Paper, Scissors — it's just better with a competitor.** So I built one: an opponent that's always ready, decides at random, and never goes easy on you.

This wasn't about making another static page. It was about building something that actually *reacts* — where the computer's move is a genuine random decision every round, not a scripted outcome.

## 🧠 How the Logic Works

The real challenge wasn't drawing three buttons on a screen — it was handling every win, loss, and draw scenario without the code turning into a wall of `if` statements.

- **The Computer's Brain** — `Math.random()` picks a random index from a `["rock", "paper", "scissors"]` array, so every round is a genuine coin flip.
- **Smart Comparisons** — Draws are caught first, then the remaining win/loss scenarios are resolved through array indexing and ternary operators instead of 50 stacked `if` blocks.
- **Real-Time Feedback** — Colors and result text update the instant a winner is decided, so there's never a "wait, who won?" moment.

## ⚙️ Tech Used

- **Vanilla JavaScript** — Event listeners and clean boolean logic, no framework doing the thinking for me.
- **CSS3** — Flexbox for centering, with smooth hover transitions for a more premium feel.
- **HTML5** — Semantic structure with clear IDs, built specifically for the JavaScript to hook into.

## 💡 My Takeaway

The real win wasn't the game — it was finally watching comparison operators click. Seeing exactly how JavaScript evaluates `true` and `false` inside conditional blocks turned a fuzzy concept into something I can now reason through with confidence.

## 🔜 What I'm Working On Next

- A **Reset Game** button to clear the scoreboard.
- **Sound effects** for wins and losses.
- Carrying these logic skills into a **Currency Converter** app.
