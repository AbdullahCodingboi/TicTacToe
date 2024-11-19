
let boxes = [];
let board = ['', '', '', '', '', '', '', '', ''];
const winningCombinations = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal 1
  [2, 4, 6]  // Diagonal 2
];


for (let i = 1; i <= 9; i++) {
  boxes.push(document.getElementById(`box${i}`));
}

console.log(boxes);

let player1 = true;

function turn() {
  boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
      if (board[index] !== '') {return};

     
      if (player1) {
        board[index] = 'O';
      } else {
        board[index] = 'X';
      }
      
    
      if (player1) {
        box.src = 'circle.svg';
      } else {
        box.src = 'x-lg.svg';
      }

      
      box.style.pointerEvents = 'none'; 

     
      const winner = checkWin();
      if (winner) {
        alert(`${winner} wins!`);
        resetGame();
      } else if (board.every(box => box !== '')) {
        alert('It\'s a tie!'); 
        resetGame();
      }

      
      player1 = !player1;
    });
  });
}

function checkWin() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; 
    }
  }
  return null; 
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', '']; 
  boxes.forEach(box => box.src = 'book-fill.svg'); 
  boxes.forEach(box => box.style.pointerEvents = 'auto'); 
  player1 = true; 
}

turn(); 

  