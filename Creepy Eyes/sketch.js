let eyes = [];

function setup() {
  createCanvas(400, 400);
  
  // make 20 creepy eyes in the eyes array
  for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(10, 100);
    let color = (random(255), random(255), random(255)); // random color
    
    eyes.push({ x, y, size, color });
  }
}

function draw() {
  background(0);
  
  for (let i = 0; i < eyes.length; i++) {
    let eye = eyes[i];
    let dx = mouseX - eye.x;
    let dy = mouseY - eye.y;
    let angle = atan2(dy, dx);
    
    push();
    translate(eye.x, eye.y);
    rotate(angle);
    fill(eye.color);
    strokeWeight(5);
    ellipse(0, 0, eye.size);
    fill(0);
    ellipse(eye.size / 4, 0, eye.size / 2);
    pop();
    
    cursor('https://icons.iconarchive.com/icons/iconmuseo/fast-food/32/burger-2-icon.png');
    
    fill(255);
     text("MMMMM...\nWhat a tasty looking burger",5,50);
    
    // change eye color randomly
    if (random(1) < 0.01) {
      eye.color = color(random(255), random(255), random(255));
    }
  }
}


