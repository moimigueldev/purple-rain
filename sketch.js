// Rain (252, 182, 3)
// Background (255, 239, 199)

let rd;
const rdAmount = 650;
const rdList = [];

function setup() {
  createCanvas(800, 800);

  for (let i = 0; i < rdAmount; i++) {
    rdList.push(new RainDrop());
  }
}

function draw() {
  // background('rgba(171, 141, 201, 0.1)');
  background(171, 141, 201);

  if (keyIsDown(LEFT_ARROW)) {
    rdList.forEach((rd) => rd.tiltLeft());
  }
  if (keyIsDown(RIGHT_ARROW)) {
    rdList.forEach((rd) => rd.tiltRight());
  }

  rdList.forEach((rd) => {
    rd.update();
    rd.show();
  });
}
