
let boardSize = 500;
let grid = boardSize / 20;

let snake;
let food;
let settings;

let score;

function setup()
{
  let canvas = createCanvas(boardSize, boardSize);
  canvas.parent("sketch");

  setFrameRate(10);

  settings = new Settings();
  snake = new Snake(4, grid);
  food = new Food(grid);

  set_Immortal = createCheckbox("immortality", settings.immortal);
  set_Immortal.changed(function() {
    settings.immortal = this.checked();
  });

  score = $('#scoreValue');
}

function draw()
{
  background(0);

  score.html((snake.currentLen - snake.len) * 10);
  snake.updateSettings(settings);
  snake.move();
  snake.draw();
  if (snake.isMealTime(food) == true) {
    snake.currentLen++;
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

function immortalChanged() {
  settings.immortal = this.checked();
}