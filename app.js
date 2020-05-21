var player;
var cpu;
const options = ["Rock", "Paper", "Scissors"];

function cpuChoice() {
  return Math.floor(Math.random() * Math.floor(3));
}

function printChoice() {
  document.getElementById("player").innerHTML = `You chose ${options[player]}`;
  document.getElementById("cpu").innerHTML = `CPU chose ${options[cpu]}`;
}

function checkWinner() {
  if (
    (player === 0 && cpu === 2) ||
    (player === 1 && cpu === 0) ||
    (player === 2 && cpu === 1)
  ) {
    document.getElementById("outcome").innerHTML = "You win!!!";
  } else if (player === cpu) {
    document.getElementById("outcome").innerHTML = "It's a tie.";
  } else {
    document.getElementById("outcome").innerHTML = "CPU wins.";
  }
}

function main(playerChoice) {
  cpu = cpuChoice();
  player = playerChoice;
  printChoice();
  checkWinner();
}
