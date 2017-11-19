offset = 2;

class Snake {
  constructor(length, gridSize) {
    this.x = 5;
    this.y = 5;
    this.grid = gridSize;
    this.len = length;
    this.tail = [];
    this.size = this.grid - offset;
    this.max = width / this.grid

    // directions
    this.dx = 0;
    this.dy = 0;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x > this.max)
      this.x = 0;
    else if(this.x < 0)
      this.x = this.max;
    else if (this.y > this.max)
      this.y = 0;
    else if (this.y < 0)
      this.y = this.max;

    this.tail.push({x:this.x, y:this.y});
    while (this.tail.length>this.len) {
      this.tail.shift();
    }
  }

  draw() {
    rectMode(CENTER);
    fill(0, 255, 0);
    for(let i=0; i<this.tail.length; i++) {
      let x = this.tail[i].x * this.grid + this.grid / 2;
      let y = this.tail[i].y * this.grid + this.grid / 2;
      let size = this.grid - offset;
      rect(x, y, size, size);
    }
  }

  isMealTime(food) {
    if (this.x == food.x && this.y == food.y)
      return true;

    return false;
  }
}

class Food {
  constructor(gridSize) {
    this.x = 15;
    this.y = 15;
    this.grid = gridSize;
    this.max = width / this.grid;
    this.min = 0; 
  }

  draw() {
    let x = this.x * this.grid + this.grid / 2;
    let y = this.y * this.grid + this.grid / 2;
    let size = this.grid - offset;
    rectMode(CENTER);
    fill(255, 0, 0);
    rect(x, y, size, size);
  }

  newPos() {
    this.x = floor(random(this.max));
    this.y = floor(random(this.max));
  }
}