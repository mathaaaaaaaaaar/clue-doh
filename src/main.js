renderGameBoard = function() {
  var gameSection = document.getElementById("game-section");
  gameSection.innerHTML = "<img class=\"board-image\" src=\"/assets/board1.jpeg\"/>";
};

onStartGameClick = function() {
  renderGameBoard();
};

attachEventListeners = function() {
  const startGameButton = document.getElementById("start-game");
  startGameButton.addEventListener('click', onStartGameClick());
};

attachEventListeners();