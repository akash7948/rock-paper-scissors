const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");

const scoreboard = {
  player: 0,
  computer: 0
};

function play(event) {
  restart.style.display = "inline-block";
  const playerChoice = event.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
}

choices.forEach(choice => choice.addEventListener("click", play));

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

function getWinner(player, computer) {
  if (player === "rock" && computer === "paper") {
    return "computer wins";
  } else if (player === "paper" && computer === "scissors") {
    return "computer wins";
  } else if (player === "scissors" && computer === "paper") {
    return "computer wins";
  } else if (player === "rock" && computer === "scissors") {
    return "you win!";
  } else if (player === "paper" && computer === "rock") {
    return "you win!";
  } else if (player === "scissors" && computer === "rock") {
    return "computer wins";
  } else;
  return "it's a draw";
}

function showWinner(winner, computerChoice) {
  console.log("the winner is ", winner);
  if (winner === "you win!") {
    scoreboard.player += 1;
    console.log(scoreboard);
    result.innerHTML = `
		<p>${winner}</p>
	 <i class="fas fa-hand-${computerChoice} fa-5x"></i>
	 <p>Computer Chose ${computerChoice}</p>
	 `;
  } else if (winner === "computer wins") {
    scoreboard.computer += 1;
    result.innerHTML = `
		<p>${winner}</p>
	 <i class="fas fa-hand-${computerChoice} fa-5x"></i>
	 <p>Computer chose ${computerChoice}</p>
	 `;
  } else {
    result.innerHTML = `
		<p>${winner}</p>
	<i class="fas fa-hand-${computerChoice} fa-5x"></i>
	<p>Computer chose ${computerChoice}</p>
	`;
  }

  score.innerHTML = `
	<p>Player: ${scoreboard.player}</p>
	<p>Computer: ${scoreboard.computer}</p>
	`;

  modal.style.display = "block";
}

function clearModal(event) {
  if (event.target == modal) modal.style.display = "none";
}

window.addEventListener("click", clearModal);

function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
	<p>Player:0</p>
	<p>Computer:0</p>
	`;
}
restart.addEventListener("click", restartGame);
