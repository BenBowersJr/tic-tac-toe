// store random numebr
let randNum = Math.random()
// select some DOM elements
let isXTurn;
let turnCount = 0;
let p1 = document.querySelector('#one')
let p2 = document.querySelector('#two')
let p3 = document.querySelector('#three')
let p4 = document.querySelector('#four')
let p5 = document.querySelector('#five')
let p6 = document.querySelector('#six')
let p7 = document.querySelector('#seven')
let p8 = document.querySelector('#eight')
let p9 = document.querySelector('#nine')
let turnEl = document.querySelector("#whosTurn")
// these let us know if they moved in a square
let moved1, moved2, moved3, moved4, moved5, moved6, moved7, moved8, moved9 = false;

function startGame() {
  // give each square a event listener
  p1.addEventListener('click', move1)
  p2.addEventListener('click', move2)
  p3.addEventListener('click', move3)
  p4.addEventListener('click', move4)
  p5.addEventListener('click', move5)
  p6.addEventListener('click', move6)
  p7.addEventListener('click', move7)
  p8.addEventListener('click', move8)
  p9.addEventListener('click', move9)

  // if randNum less than .50, make X's turn
  if (randNum <= .50) {
    isXTurn = true;
    turnEl.textContent = "It's X's Turn"
  } else {
    turnEl.textContent = "It's O's Turn"
    isXTurn = false;
  }
}

function checkForWin(turn) {
  turnCount++
  console.log(turnCount)
  //check for all 8 win scenarios, if win scenario detected, display winner
  if ((p1.textContent == turn && p2.textContent == turn && p3.textContent == turn) ||
  (p4.textContent == turn && p5.textContent == turn && p6.textContent == turn) ||
  (p7.textContent == turn && p8.textContent == turn && p9.textContent == turn) ||
  (p1.textContent == turn && p4.textContent == turn && p7.textContent == turn) ||
  (p2.textContent == turn && p5.textContent == turn && p8.textContent == turn) ||
  (p3.textContent == turn && p6.textContent == turn && p9.textContent == turn) ||
  (p1.textContent == turn && p5.textContent == turn && p9.textContent == turn) ||
  (p3.textContent == turn && p5.textContent == turn && p7.textContent == turn)) {
    if (turn == "X") {
      turnEl.textContent = "X wins!"
      endGame()
    } else if (turn == "O") {
      turnEl.textContent = "O wins!"
      endGame()
    }
    //if it is a draw
  } else if (turnCount == 9) {
    turnEl.textContent = "Draw!"
    endGame()
  }
}

function move1() {
  // if they havent moved here yet and its x's turn
  if (!moved1 && isXTurn) {
    p1.textContent = 'X'
    isXTurn = false;
    turnEl.textContent = "It is O's Turn.";
    checkForWin("X");
  // if they havent moved here yet and its o's turn
  } else if (!moved1 && !isXTurn) {
    p1.textContent = 'O';
    isXTurn = true;
    turnEl.textContent = "It is X's Turn.";
    checkForWin("O");
  }
  // this makes it so they cant move in this square anymore
  moved1 = true;
}
function move2() {
  // if not moved yet and its X's turn
  if (!moved2 && isXTurn) {
    // Do X turn stuff
    p2.textContent = 'X'
    isXTurn = false;
    turnEl.textContent = "It is O's Turn.";
    checkForWin("X");
  } else if (!moved2 && !isXTurn) {
    // do O turn stuff otherwise
    p2.textContent = 'O'
    isXTurn = true;
    turnEl.textContent = "It is X's Turn.";
    checkForWin("X");
  }
  // this makes it so they cant move in this square anymore
  moved2 = true;
}
function move3() {
  // if not moved yet and its X's turn
  if (!moved3 && isXTurn) {
    // Do X turn stuff
    p3.textContent = 'X'
    isXTurn = false;
    turnEl.textContent = "It is O's Turn.";
    checkForWin("X");
  } else if (!moved3 && !isXTurn) {
    // do O turn stuff otherwise
    p3.textContent = 'O'
    isXTurn = true;
    turnEl.textContent = "It is X's Turn.";
    checkForWin("O");
  }
  // this makes it so they cant move in this square anymore
  moved3 = true;
}
function move4() {
  // if not moved yet and its X's turn
  if (!moved4 && isXTurn) {
    // Do X turn stuff
    p4.textContent = 'X'
    isXTurn = false;
    turnEl.textContent = "It is O's Turn.";
    checkForWin("X");
  } else if (!moved4 && !isXTurn) {
    // do O turn stuff otherwise
    p4.textContent = 'O'
    isXTurn = true;
    turnEl.textContent = "It is X's Turn.";
    checkForWin("O");
  }
  // this makes it so they cant move in this square anymore
  moved4 = true;
}
function move5() {
  // if not moved yet and its X's turn
  if (!moved5 && isXTurn) {
    // Do X turn stuff
    p5.textContent = 'X'
    isXTurn = false;
    turnEl.textContent = "It is O's Turn.";
    checkForWin("X");
  } else if (!moved5 && !isXTurn) {
    // do O turn stuff otherwise
    p5.textContent = 'O'
    isXTurn = true;
    turnEl.textContent = "It is X's Turn.";
    checkForWin("O");
  }
  // this makes it so they cant move in this square anymore
  moved5 = true;
}
function move6() {
  // if not moved yet and its X's turn
  if (!moved6 && isXTurn) {
    // Do X turn stuff
    p6.textContent = 'X'
    isXTurn = false;
    turnEl.textContent = "It is O's Turn.";
    checkForWin("X");
  } else if (!moved6 && !isXTurn) {
    // do O turn stuff otherwise
    p6.textContent = 'O'
    isXTurn = true;
    turnEl.textContent = "It is X's Turn.";
    checkForWin("O");
  }
  // this makes it so they cant move in this square anymore
  moved6 = true;
}
function move7() {
  // if not moved yet and its X's turn
  if (!moved7 && isXTurn) {
    // Do X turn stuff
    p7.textContent = 'X'
    isXTurn = false;
    turnEl.textContent = "It is O's Turn.";
    checkForWin("X");
  } else if (!moved7 && !isXTurn) {
    // do O turn stuff otherwise
    p7.textContent = 'O'
    isXTurn = true;
    turnEl.textContent = "It is X's Turn.";
    checkForWin("O");
  }
  // this makes it so they cant move in this square anymore
  moved7 = true;
}
function move8() {
  // if not moved yet and its X's turn
  if (!moved8 && isXTurn) {
    // Do X turn stuff
    p8.textContent = 'X'
    isXTurn = false;
    turnEl.textContent = "It is O's Turn.";
    checkForWin("X");
  } else if (!moved8 && !isXTurn) {
    // do O turn stuff otherwise
    p8.textContent = 'O'
    isXTurn = true;
    turnEl.textContent = "It is X's Turn.";
    checkForWin("O");
  }
  // this makes it so they cant move in this square anymore
  moved8 = true;
}
function move9() {
  // if not moved yet and its X's turn
  if (!moved9 && isXTurn) {
    // Do X turn stuff
    p9.textContent = 'X'
    isXTurn = false;
    turnEl.textContent = "It is O's Turn.";
    checkForWin("X");
  } else if (!moved9 && !isXTurn) {
    // do O turn stuff otherwise
    p9.textContent = 'O'
    isXTurn = true;
    turnEl.textContent = "It is X's Turn.";
    checkForWin("O");
  }
  // this makes it so they cant move in this square anymore
  moved9 = true;
}
function endGame() {
  //remove all listeners
  p1.removeEventListener('click', move1)
  p2.removeEventListener('click', move2)
  p3.removeEventListener('click', move3)
  p4.removeEventListener('click', move4)
  p5.removeEventListener('click', move5)
  p6.removeEventListener('click', move6)
  p7.removeEventListener('click', move7)
  p8.removeEventListener('click', move8)
  p9.removeEventListener('click', move9)
}

startGame();
