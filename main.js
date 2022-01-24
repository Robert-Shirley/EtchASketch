//initial Color
let color = "black";
let click = true;

//Set up board based on size.
function populateBoard(size) {
  let gameBoard = document.querySelector(".board");
  let squares = gameBoard.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  gameBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gameBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  const gridXY = size * size;
  for (let i = 1; i <= gridXY; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    gameBoard.insertAdjacentElement("beforeend", square);
  }
}

//mouseover event to color the square based on the current choice
function colorSquare() {
  if (click) {
    if (color == "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

//sets the color based on the button clicked
function setColor(choice) {
  color = choice;
}

//sets the sized based on the input chosen. Min of 2 and max of 100
function setSize(value) {
  if (value >= 2 && value <= 100) {
    document.querySelector(".error").textContent = "";
    populateBoard(value);
  } else {
    document.querySelector(".error").textContent =
      "Please enter a value between 2 and 100";
  }
}

//Sets each square to a color of white
function clearBoard() {
  let gameBoard = document.querySelector(".board");
  let squares = gameBoard.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}

function setClick(e) {
  if (e.target.tagName != "BUTTON") {
    click = !click;
    if (click) {
      document.querySelector(".mode").textContent = "Mode: Coloring";
    } else {
      document.querySelector(".mode").textContent = "Mode: Not Coloring";
    }
  }
}

//initialize the board with 16x16
populateBoard(16);
document.querySelector(".grid-container").addEventListener("click", setClick);
