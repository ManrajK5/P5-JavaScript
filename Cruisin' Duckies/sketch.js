let duckies = []; //each duck has x, y, color
let ripples = []; //each ripple has x, y, length
let sunSize = 30;
let triangleX = -30;
let ellipseX = 50;
let circleX = 80;
function setup() {
  createCanvas(400, 400);
  noFill();

  //creating 10 objects with randomized properties
  for (let i = 0; i < 10; i++) {
    //create 10 duckies as shown above and store them in the array duckies
    duckies[i] = new p5.Vector(random(450, 950), random(260, height / 2 - 50), color('yellow'));
  }

  //creating 10 objects with randomized properties
  for (let i = 0; i < 10; i++) {
    //create 10 ripples as shown above and store them in the array ripples
    ripples[i] = new p5.Vector((-1) * random(200, 800), random(height / 2, height), random(50, 150));
  }
}

function draw() {
  drawBackground();

  //draw all ripples and update their position
  for (let i = 0; i < ripples.length; i++) {
    drawRipple(ripples[i]);
    ripples[i].x++;
    if (ripples[i].x > width + 80) {
      ripples[i].x = (-1) * random(200, 800);
      ripples[i].y = random(width / 2, height);
      ripples[i].z = random(50, 150);
    }
  }

  //draw all duckies and update their position
  for (let i = 0; i < duckies.length; i++) {
    drawDuck(duckies[i]);
    if (mouseIsPressed) {
      duckies[i].x++;
     /* drawShark();
      triangleX++;
      ellipseX++;
      circleX++;
      if (triangleX > width + 20) {
    triangleX = 30;
  }
  if (ellipseX > width + 50) {
    ellipseX = 50;
  }
  if (circleX > width + 20) {
    circleX = 80;
  }
*/
    } else {
      duckies[i].x--;
    }
    if (duckies[i].x < -80) {
      duckies[i].x = random(450, 950);
      duckies[i].y = random(240, height / 2 - 50);
    }
  }
}

function drawBackground() {
  background('paleTurquoise');
  // water and sun
  noStroke();
  fill('dodgerBlue');
  rect(0, 200, 400, 200);
  drawSun()
}

function drawSun() {
  fill('gold');
  sunSize += 0.2
  if (sunSize > 150) {
    sunSize = 30
  }
  strokeWeight(50);
  stroke(242, 242, 61, 50);
  ellipse(330, 50, sunSize, sunSize);
  noStroke();
}

function drawDuck(duck) {
  fill('orange');
  ellipse(duck.x, duck.y, 20, 8);
  fill(duck.z);
  circle(duck.x + 20, duck.y, 40);
  ellipse(duck.x + 40, duck.y + 25, 60, 50);
  fill(0);
  circle(duck.x + 15, duck.y - 5, 4);
}

function drawRipple(ripple) {
  strokeWeight(1);
  stroke(41, 108, 204);
  line(ripple.x, ripple.y, ripple.x + ripple.z, ripple.y);
  noStroke();
}

/*function drawShark() {
  fill(200,0,0);
  triangle(triangleX, 232, triangleX, 272, triangleX + 40, 252);
  ellipse(ellipseX, 250, 100, 50);
  fill(0);
  ellipse(circleX, 243, 10, 10);
}*/


