
let boardSize = 500;
let grid = boardSize / 20;

let snake;
let food;

function setup()
{
  createCanvas(boardSize, boardSize);
  setFrameRate(10);

  snake = new Snake(4, grid);
  food = new Food(grid);
}

function draw()
{
  background(0);

  snake.move();
  snake.draw();
  if (snake.isMealTime(food) == true) {
    snake.len++;
    food.newPos();
  }
  food.draw();
}

function keyPressed()
{
  switch (keyCode)
  {
    case LEFT_ARROW:
      snake.dx = -1;
      snake.dy = 0;
      break;
    case RIGHT_ARROW:
      snake.dx = 1;
      snake.dy = 0;
      break;
    case UP_ARROW:
      snake.dy = -1;
      snake.dx = 0;
      break;
    case DOWN_ARROW:
      snake.dy = 1;
      snake.dx = 0;
      break;
  }
}

function mousePressed() {
  food.newPos();
}