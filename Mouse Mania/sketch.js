function setup() {
  createCanvas(400, 400);
}

function draw() {
    background(30, 144, 255);
    stroke(255);
    strokeWeight(5);
    line (200, 0, 200, 400);
    line (0, 200, 400, 200);    
    noStroke();
    ellipse ( mouseX, mouseY, 25, 25);
    ellipse (width - mouseX, mouseY, 25, 25);
    ellipse (mouseX, height-mouseY, 25, 25);
    ellipse (width-mouseX, height-mouseY, 25, 25);
}