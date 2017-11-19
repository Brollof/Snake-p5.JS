offset = 2;

class Snake {
  constructor(length, grid) {
    this.x = 5;
    this.y = 5;
    this.grid = grid;
    this.len = length;
    this.currentLen = length;
    this.tail = [];
    this.size = this.grid - offset;
    this.max = width / this.grid
    this.settings = 0;
    this.dx = 0;
    this.dy = 0;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x >= this.max)
      this.x = 0;
    else if(this.x < 0)
      this.x = this.max;
    else if (this.y >= this.max)
      this.y = 0;
    else if (this.y < 0)
      this.y = this.max;

    this.isDead();
    
    this.tail.push({x:this.x, y:this.y});
    while (this.tail.length>this.currentLen) {
      this.tail.shift();
    }
  }

  draw() {
    rectMode(CENTER);
    fill(0, 255, 0);
    for (let i = 0; i < this.tail.length; i++) {
      let x = this.tail[i].x * this.grid + this.grid / 2;
      let y = this.tail[i].y * this.grid + this.grid / 2;
      rect(x, y, this.size, this.size);
    }
  }

  isMealTime(food) {
    if (this.x == food.x && this.y == food.y)
      return true;

    return false;
  }

  updateSettings(newSettings) {
    this.settings = newSettings;
  }

  isDead() {
    if (settings.immortal == true)
      return false;

    for (let i = 0; i < this.tail.length; i++) {
      if (this.x == this.tail[i].x && this.y == this.tail[i].y) {
        this.currentLen = this.len;
        return true;
      }
    }
    return false;
  }
}

class Food {
  constructor(grid) {
    this.x = 15;
    this.y = 15;
    this.grid = grid;
    this.max = width / this.grid;
    this.min = 0; 
    this.size = this.grid - offset;
  }

  draw() {
    let x = this.x * this.grid + this.grid / 2;
    let y = this.y * this.grid + this.grid / 2;
    rectMode(CENTER);
    fill(255, 0, 0);
    rect(x, y, this.size, this.size);
  }

  newPos() {
    this.x = floor(random(this.max));
    this.y = floor(random(this.max));
  }
}