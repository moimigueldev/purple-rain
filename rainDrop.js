class RainDrop {
  height = random(10, 20);
  ySpeed = map(this.height, 10, 20, 8, 15);
  strokeWeight = map(this.ySpeed, 10, 20, 0.5, 2.5);
  rdColor = '132, 53, 212';

  constructor() {
    this.x = random(width);
    this.y = random(-600, 0);
  }

  update() {
    this.y += this.ySpeed;

    if (this.y > height) {
      this.y = random(-200, 0);
      this.height = random(5, 20);
      this.ySpeed = this.height > 10 ? 10 : 4;
    }
    // noLoop();
  }

  show() {
    strokeWeight(this.strokeWeight);
    stroke(132, 53, 212);
    line(this.x, this.y, this.x, this.y + this.height);
  }
}
