function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (computerSelection === playerSelection) {
    return "Draw.";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    return "You lose. Rock beats scissors.";
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    return "You win. Paper beats rock.";
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    return "You win. Scissors beats paper.";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    return "You lose. Paper beats rock.";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    return "You lose. Scissors beats paper.";
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    return "You win. Rock beats scissors.";
  } else {
    return "error2";
  }
}

function computerPlay() {
  let numChoice = Math.floor(Math.random() * 3 + 1);
  switch (numChoice) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
    default:
      return "error1";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playerPlay = prompt("Choice:");
    result = playRound(playerPlay, computerPlay());
    if (result[4] === "w") {
      playerScore += 1;
    } else if (result[4] === "l") {
      computerScore += 1;
    } else {
      playerScore += 1;
      computerScore += 1;
    }
    console.log(result);
  }

  console.log(`Your score: ${playerScore}`);
  console.log(`Computer score: ${computerScore}`);
  if (playerScore > computerScore) {
    console.log("You win the game.");
  } else if (playerScore === computerScore) {
    console.log("The game is a draw.");
  } else if (playerScore < computerScore) {
    console.log("You lose the game.");
  } else {
    console.log("Error3");
  }
}

const div = document.querySelector("div");
const btns = document.querySelectorAll("button");
let playerScore = 0;
let computerScore = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let result = document.createElement("p");
    let scoreLine = document.createElement("p");
    result.textContent = playRound(btn.textContent, computerPlay());

    if (result.textContent[4] === "w") {
      playerScore += 1;
    } else if (result.textContent[4] === "l") {
      computerScore += 1;
    }

    scoreLine.textContent = `You: ${playerScore}. Computer: ${computerScore}`;
    if (computerScore === 5) {
      scoreLine.textContent += ". Computer wins.";
    } else if (playerScore === 5) {
      scoreLine.textContent += ". You win.";
    }
    div.appendChild(result);
    div.appendChild(scoreLine);
  });
});
