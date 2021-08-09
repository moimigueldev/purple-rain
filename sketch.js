// Rain (252, 182, 3)
// Background (255, 239, 199)
const drops = [];
const numOfDrops = 500;
function setup() {
  createCanvas(2500, 600);
  for (let i = 0; i < numOfDrops; i++) {
    drops.push(new Drop());
  }
}

function draw() {
  background(50);

  for (let i = 0; i < drops.length; i++) {
    if (keyIsDown(RIGHT_ARROW)) {
      drops[i].setForce(drops[i].rightWind);
    }
    if (keyIsDown(LEFT_ARROW)) {
      drops[i].setForce(drops[i].leftWind);
    }

    drops[i].update();
    drops[i].checkBorder();
    drops[i].show();
  }
}

class Drop {
  length = random(5, 20);

  constructor() {
    this.pos = createVector(random(width), random(0, -height));
    this.vel = createVector(0, 1);
    this.acc = createVector();
    this.weight = map(this.length, 5, 20, 2, 7);
    this.gravity = createVector(
      0,
      Math.abs(map(this.weight, 2, 7, 0.01, 0.09))
    );
    this.rightWind = createVector(0.05, 0);
    this.leftWind = createVector(-0.05, 0);
  }

  setForce(force) {
    this.acc.add(force);
  }

  update() {
    this.setForce(this.gravity);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc = createVector();
  }

  show() {
    push();
    stroke(252, 182, 3);
    strokeWeight(this.weight);
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y + this.length);
    pop();
  }

  checkBorder() {
    if (this.pos.y + this.length > height) {
      this.length = random(5, 20);
      this.weight = map(this.length, 5, 20, 1, 7);
      this.pos = createVector(random(width), random(0, -height));
      this.vel = createVector(0, 1);
      this.gravity = createVector(
        0,
        Math.abs(map(this.weight, 2, 7, 0.01, 0.09))
      );
    }
  }
}
