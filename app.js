function startGame(playerChoice) {
  //generates numbers between 0 to 2
  const options = ["Rock", "Paper", "Scissors"];
  const cpu = Math.floor(Math.random() * Math.floor(3));
  document.getElementById(
    "player"
  ).innerHTML = `You chose ${options[playerChoice]}`;
  document.getElementById("cpu").innerHTML = `CPU chose ${options[cpu]}`;
  if (
    (playerChoice === 0 && cpu === 2) ||
    (playerChoice === 1 && cpu === 2) ||
    (playerChoice === 2 && cpu === 1)
  ) {
    document.getElementById("outcome").innerHTML = "You win!!!";
  } else if (playerChoice === cpu) {
    document.getElementById("outcome").innerHTML = "It's a tie.";
  } else {
    document.getElementById("outcome").innerHTML = "CPU wins.";
  }
}
