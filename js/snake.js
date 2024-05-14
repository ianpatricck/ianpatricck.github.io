const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const interFont = new FontFace("Inter", "url(../assets/fonts/Inter-Regular.ttf)");

canvas.width = 800;
canvas.height = 800;

// Class for Snake's body
class Body {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

// Snake attributes
var parts = [];
var speed = 15;
var XVEL = 0;
var YVEL = 0;

var headX = 10;
var headY = 10;
var foodX = 5;
var foodY = 5;

var snakeLength = 2;
var score = 0;

var tileCount = 20;
var tileSize = canvas.width / tileCount - 2;

var isStarted = false;

// Main function
const drawSnakeGame = () => {

  if (isStarted == false) {
    startMessage();
  } else {
    changePosition();

    let isOver = isGameOver();
    if (isOver) {
      gameOverMessage();
      return;
    }

    clear();

    checkFoodCollision();

    drawSnake();
    drawFood();

    drawScore();

    if (score > 2)
      speed = 20;

    if (score > 5)
      speed = 25;
  }

  setTimeout(drawSnakeGame, 1000 / speed);
}

// Clear screen
const clear = () => {
  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height);
}

// Change snake part position
const changePosition = () => {
  headX+=XVEL;
  headY+=YVEL;
}

const drawSnake = () => {

  const gradient = context.createLinearGradient(75, 50, 5, 90, 60, 100);
  gradient.addColorStop(0, "#f0d25c");
  gradient.addColorStop(1, "#ffd11a");

  context.fillStyle = gradient;
  for (let index = 0; index < parts.length; index++) {
    let part = parts[index];  
    context.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
  }

  parts.push(new Body(headX, headY));

  while (parts.length > snakeLength) {
    parts.shift();
  }

  // Draw snake's head
  context.fillStyle = "#ffd11a";
  context.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
}

const drawFood = () => {
  context.fillStyle = "#70db70";
  context.fillRect(foodX * tileCount, foodY * tileCount, tileSize, tileSize);
}

// The snake's head found food
const checkFoodCollision = () => {
  if (foodX == headX && foodY == headY) {
    foodX = Math.floor(Math.random() * tileSize);
    foodY = Math.floor(Math.random() * tileSize);

    snakeLength++;
    score++;
  }
}

const isGameOver = () => {
  let gameOver = false;

  if (YVEL == 0 && XVEL == 0)
    return false;

  if (headX < 0)
    gameOver = true;
  else if (headX == tileSize + 2)
    gameOver = true;
  else if (headY < 0)
    gameOver = true;
  else if (headY == tileSize + 2)
    gameOver = true;

  for (let index = 0; index < parts.length; index++) {
    let part = parts[index];
    if (part.x == headX && part.y == headY) {
      gameOver = true;
      break;
    }
  }

  return gameOver;
}

// Show score in the screen
const drawScore = () => {
  context.fillStyle = "white";
  context.font = "30px Inter";  
  context.fillText("Score " + score, canvas.width - 150, 40);
}

const startMessage = () => { 
  context.fillStyle = "#ebebeb";
  context.font = "bold 60px Inter";
  context.textAlign = "center";
  context.fillText("Press F to start", canvas.width / 2, canvas.height / 2);
}

const gameOverMessage = () => {
  context.fillStyle = "white";
  context.font = "bold 80px Inter";
  context.textAlign = "center";
  context.fillText("Game over!", canvas.width / 2, canvas.height / 2);
}

document.body.addEventListener("keydown", (event) => {  

  if (event.key == "f") {
    isStarted = true;
    XVEL = 1;
  }

  // Up
  if (event.key == "w") {

    if (YVEL == 1)
      return;

    XVEL = 0;
    YVEL = -1;
  }

  // Down
  if (event.key == "s") {

    if (YVEL == -1)
      return;

    XVEL = 0;
    YVEL = 1;
  }

  // Left
  if (event.key == "a") {

    if (XVEL == 1)
      return;

    XVEL = -1;
    YVEL = 0;
  }

  // Right
  if (event.key == "d") {

    if (XVEL == -1)
      return;

    XVEL = 1;
    YVEL = 0;
  }

});

interFont.load().then(font => {
  document.fonts.add(font);
  drawSnakeGame();
});


