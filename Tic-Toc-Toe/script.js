let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleCellClick(index) {
    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        document.getElementById('board').children[index].innerText = currentPlayer;
        checkWinner();
        togglePlayer();
    }
}

function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            displayWinner(gameBoard[a]);
            return;
        }
    }

    if (!gameBoard.includes('')) {
        displayTie();
    }
}

function displayWinner(winner) {
    document.getElementById('result').innerText = `Player ${winner} wins!`;
    openModal();
    gameActive = false;
}

function displayTie() {
    document.getElementById('result').innerText = 'It\'s a tie!';
    openModal();
    gameActive = false;
}

function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function newGame() {
    closeModal();
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;

    document.getElementById('result').innerText = '';
    const cells = document.getElementById('board').children;

    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
}
