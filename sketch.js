// Rain (252, 182, 3)
// Background (255, 239, 199)

let rd;
const rdAmount = 200;
const rdList = [];
function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < rdAmount; i++) {
    rdList.push(new RainDrop());
  }
}

function draw() {
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

// function keyReleased() {
//   if (keyCode === LEFT_ARROW) {
//     rdList.forEach((rd) => rd.resetLeftTilt());
//   }
//   return false; // prevent any default behavior
// }
