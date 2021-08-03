// Rain (252, 182, 3)
// Background (255, 239, 199)

let rd;
const rdAmount = 500;
const rdList = [];
function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < rdAmount; i++) {
    rdList.push(new RainDrop());
  }
}

function draw() {
  background(171, 141, 201);

  rdList.forEach((rd) => {
    rd.update();
    rd.show();
  });
}
