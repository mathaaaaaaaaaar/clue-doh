renderGameBoard = function() {
  var gameSection = document.getElementById("game-section");
  gameSection.innerHTML = "<img class=\"board-image\" src=\"/assets/board1.jpeg\"/>";
};

onStartGameClick = function() {
  renderGameBoard();
};

const startGameButton = document.querySelector("#start-game");
startGameButton.addEventListener('click', event => {
  onStartGameClick();
  console.log(event);
});