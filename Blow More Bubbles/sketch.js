let bubbles = [];

function setup() {
  createCanvas(400, 400);
  noFill();

  for (let i = 0; i < 10; i++) {
    let newBubble = {
      x: random(0, width),
      y: random(0, height),
      size: random(10, 30),
      speedofX: random(-5, 5),
      speedofY: random(-5, 5)
    };
    bubbles.push(newBubble);
  }
}

function draw() {
  background(82, 175, 199, 40);
  stroke(255);

  //accessing them in the array and drawing them one by one
  for (let i = 0; i < bubbles.length; i++) {
    //make bubbles grow
    bubbles[i].size += 0.5;
    //bubble movement
    bubbles[i].x += bubbles[i].speedofX;
    bubbles[i].y += bubbles[i].speedofY;
    //collision
    if (bubbles[i].x < 0 || bubbles[i].x > width) {
      bubbles[i].speedofX *= -1;
    }
    if (bubbles[i].y < 0 || bubbles[i].y > height) {
      bubbles[i].speedofY *= -1;
    }
    //bubble
    ellipse(bubbles[i].x, bubbles[i].y, bubbles[i].size);
  }
  //text
  textSize(20);
  text("Click on the canvas to move all bubbles", 20, 20);
  text("Press space to reset when they get too big", 10, 390);

}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].x = random(width);
    bubbles[i].y = random(height);
  }
}

function keyPressed() {
  //reset bubble sizes when spacebar is pressed
  if (key === ' ') {
    for (let i = 0; i < bubbles.length; i++) {
      bubbles[i].size = random(10, 30);
    }
  }
}

