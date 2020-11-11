// store random numebr
let randNum = Math.random()
// select some DOM elements
let isXTurn;
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
let moved1 = false;
let moved2 = false;
let moved3 = false;
let moved4 = false;
let moved5 = false;
let moved6 = false;
let moved7 = false;
let moved8 = false;
let moved9 = false;

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

function checkForWin() {
  // we can check for wins like this
  // have each grid have a id like a keyboard numpad.
  // check if there is any win conditions by checking the squares ID's.
  // if the textcontent of 1, 4, 7 are teh same. that player wins
}

function move1() {
  // if not moved yet and its X's turn
  if (!moved1 && isXTurn) {
    // Do X turn stuff
    p1.textContent = 'X'
    isXTurn = false;
    turnEl.textContent = "It is O's Turn."
  } else if (!moved1 && !isXTurn) {
    // do O turn stuff otherwise
    p1.textContent = 'O'
    isXTurn = true;
    turnEl.textContent = "It is X's Turn."
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
    turnEl.textContent = "It is O's Turn."
  } else if (!moved2 && !isXTurn) {
    // do O turn stuff otherwise
    p2.textContent = 'O'
    isXTurn = true;
    turnEl.textContent = "It is X's Turn."
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
    turnEl.textContent = "It is O's Turn."
  } else if (!moved3 && !isXTurn) {
    // do O turn stuff otherwise
    p3.textContent = 'O'
    isXTurn = true;
    turnEl.textContent = "It is X's Turn."
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
    turnEl.textContent = "It is O's Turn."
  } else if (!moved4 && !isXTurn) {
    // do O turn stuff otherwise
    p4.textContent = 'O'
    isXTurn = true;
    turnEl.textContent = "It is X's Turn."
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
    turnEl.textContent = "It is O's Turn."
  } else if (!moved5 && !isXTurn) {
    // do O turn stuff otherwise
    p5.textContent = 'O'
    isXTurn = true;
    turnEl.textContent = "It is X's Turn."
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
    turnEl.textContent = "It is O's Turn."
  } else if (!moved6 && !isXTurn) {
    // do O turn stuff otherwise
    p6.textContent = 'O'
    isXTurn = true;
    turnEl.textContent = "It is X's Turn."
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
    turnEl.textContent = "It is O's Turn."
  } else if (!moved7 && !isXTurn) {
    // do O turn stuff otherwise
    p7.textContent = 'O'
    isXTurn = true;
    turnEl.textContent = "It is X's Turn."
  }
  // this makes it so they cant move in this square anymore
  moved7 = true;
}
function move8() {
  // if not moved yet and its X's turn
  if (!moved1 && isXTurn) {
    // Do X turn stuff
    p8.textContent = 'X'
    isXTurn = false;
    turnEl.textContent = "It is O's Turn."
  } else if (!moved8 && !isXTurn) {
    // do O turn stuff otherwise
    p8.textContent = 'O'
    isXTurn = true;
    turnEl.textContent = "It is X's Turn."
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
    turnEl.textContent = "It is O's Turn."
  } else if (!moved9 && !isXTurn) {
    // do O turn stuff otherwise
    p9.textContent = 'O'
    isXTurn = true;
    turnEl.textContent = "It is X's Turn."
  }
  // this makes it so they cant move in this square anymore
  moved9 = true;
}


startGame();
