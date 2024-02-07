let circle1, circle2, circle3;
let size1, size2, size3;
let goalReached = false;

function setup(){
  createCanvas(400, 400);
  circle1 = new Circle(60, 60, random(75, 50), randomColor());
  circle2 = new Circle(200, 100, random(20, 50), randomColor());
  circle3 = new Circle(150, 150, random(20, 50), randomColor());
}

function draw(){
  background(20);
  circle1.move();
  circle2.move();
  circle3.move();
  circle1.display();
  circle2.display();
  circle3.display();
  checkCollision(circle1, circle2);
  checkCollision(circle1, circle3);
  checkCollision(circle2, circle3);
  
  if(!goalReached && (circle1.pos.x >= 125 && circle1.pos.x <= 300) && (circle1.pos.y >= 350 && circle1.pos.y <= 450) ||
     (circle2.pos.x >= 125 && circle2.pos.x <= 300) && (circle2.pos.y >= 350 && circle2.pos.y <= 450) ||
     (circle3.pos.x >= 125 && circle3.pos.x <= 300) && (circle3.pos.y >= 350 && circle3.pos.y <= 450)) {
    goalReached = true;
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(255);
    stroke(0);
    strokeWeight(2);
    text("GOAL!", width/2, height/2);
  }
  
  stroke(0,0,200)
  fill(255)
  rect(120, 350, 175, 100)
}

class Circle {
  constructor(x, y, size, color) {
    this.pos = createVector(x, y);
    this.prevPos = createVector(x, y);
    this.vel = createVector(random(-3, 3), random(-3, 3));
    this.size = size;
    this.color = color;
  }
  
  move() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
    this.pos.add(this.vel);
    if(this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }
    if(this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }
  
  display() {
    stroke(this.color);
    strokeWeight(this.size/4);
    noFill();
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
  }
}

function checkCollision(c1, c2) {
  let distance = dist(c1.pos.x, c1.pos.y, c2.pos.x, c2.pos.y);
  if(distance < (c1.size/2 + c2.size/2)) {
    c1.vel.mult(-1);
    c2.vel.mult(-1);
  }
}

function randomColor() {
  let r = random(100, 255);
  let g = random(0, 200);
  let b = random(100, 200);
  return color(r, g, b)
}



