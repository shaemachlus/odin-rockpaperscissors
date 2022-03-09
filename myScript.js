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
  let playerScore = 0;
  let computerScore = 0;
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

game();
