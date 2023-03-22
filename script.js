// initialize the canvas and context
let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

// set the starting position and size of the ball
let ballX = canvas.width / 4;
let ballY = canvas.height / 4;
let ballRadius = 10;

// set the speed and starting direction of the ball
let ballSpeedX = 1;
let ballSpeedY = 1;

// set the position and size of the paddles
let paddleHeight = 150;
let paddleWidth = 12;
let paddleSpeed = 50;
let player1Y = (canvas.height - paddleHeight) / 2;
let player2Y = (canvas.height - paddleHeight) / 2;
// we are assuming canvas.height represents the height of the HTML canvas element and paddleHeight represents the height of the paddle, we calculates the vertical position for the top edge of each paddle such that they are both vertically centered on the canvas.

// define the score properties
let player1Score = 0;
let player2Score = 0;
let winningScore = 6;
let players = ["Player 1", "Player 2"]
var gameOver = false

  // set the game loop
var gameLoop = setInterval(draw, 10);
  
  

// set the game loop
// timer = setInterval(draw, 50);

// listen for key presses to move the paddles
document.addEventListener("keydown", keyDownHandler, false);










// sorces 


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI


// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/closePath


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random


// https://blog.thejaytray.com/canvas-game-tutorial-pong/


// https://www.tutorialspoint.com/How-to-set-Heading-alignment-in-HTML#:~:text=To%20set%20the%20heading%20alignment,setting%20alignment%20for%20an%20element.