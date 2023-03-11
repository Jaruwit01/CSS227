var userPlayer = "O";
var computerPlayer = "X";
 var currentPlayer = userPlayer;
var moves = ["", "", "", "", "", "", "", "", ""];
var winners = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
var grid = document.getElementById("grid");
var statusText = document.getElementById("status");
var selector = document.getElementById("playerSelector");

selector.addEventListener("change", function(){
    userPlayer = selector.value;
    computerPlayer = userPlayer == "X" ? "O" : "X";
    resetGame();
});
function makeMove(square) {
	if (moves[square] == "") {
		moves[square] = userPlayer;
		grid.rows[Math.floor(square/3)].cells[square%3].innerHTML = userPlayer;
		if (checkWin(userPlayer)) {
			statusText.innerHTML = userPlayer + " wins!";
			grid.classList.add("winner");
			return;
		}
		if (checkTie()) {
			statusText.innerHTML = "you are equal!";
            grid.classList.add("equal");
			return;
		}

		currentPlayer = computerPlayer;
		statusText.innerHTML = computerPlayer + "'s turn";
		setTimeout(computer, 500);
	}
}

function computer() {
	var availableMoves = getAvailableMoves();
	var randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
	moves[randomMove] = computerPlayer;
	grid.rows[Math.floor(randomMove/3)].cells[randomMove%3].innerHTML = computerPlayer;
	if (checkWin(computerPlayer)) {
		statusText.innerHTML = computerPlayer + " wins!";
		grid.classList.add("winner");

		return;
	}
	if (checkTie()) {
		statusText.innerHTML = "you are equal!";
        grid.classList.add("equal");
		return;
	}
   
	currentPlayer = userPlayer;
	statusText.innerHTML = userPlayer + "'s turn";
}

function getAvailableMoves() {
	var availableMoves = [];
	for (var i = 0; i < moves.length; i++) {
		if (moves[i] == "") {
			availableMoves.push(i);
		}
	}
	return availableMoves;
}

function checkWin(player) {
	for (var i = 0; i < winners.length; i++) {
		if (moves[winners[i][0]] == player && moves[winners[i][1]] == player && moves[winners[i][2]] == player) {
			return true;
		}
	}
	return false;
}

function checkTie() {
	for (var i = 0; i < moves.length; i++) {
		if (moves[i] == "") {
			return false;
		}
	}
	return true;
}

function resetGame() {
	currentPlayer = userPlayer;
	moves = ["", "", "", "", "", "", "", "", ""];
	for (var i = 0; i < grid.rows.length; i++) {
		for (var j = 0; j < grid.rows[i].cells.length; j++) {
			grid.rows[i].cells[j].innerHTML = "";
		}
	}
	statusText.innerHTML = userPlayer + "'s turn";
	grid.classList.remove("winner");
    grid.classList.remove("equal");
    
}

