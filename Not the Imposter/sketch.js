let x=50;
let y=250;
let angle=0;
function setup() { 
  createCanvas(400, 400);
  frameRate(3);

}

function draw() { 
  var color1 = color(0, 0, 153);
  var color2 = color(204, 51, 0);
  setGradient(0, 0, 400, 400, color1, color2, "Y");
    
  for (var i = 0; i < 50; i++) {
    var star = new Star();
    star.draw();
    fill(0)
    text("You Were Not The Imposter 😢", width/2, height*0.7);

  }
  
  drawAmongUs();

}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis == "Y") {  // Top to bottom gradient
    for (let i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);

    }

  }  

}
function Star() {
  this.x = random(400);
  this.y = random(600 - 200);
  this.size = random(1, 4);
  this.opacity = random(50, 255);
  this.color = color(255, 255, 0, this.opacity);
}

Star.prototype.draw = function() {
  noStroke();
  fill(this.color);
  ellipse(this.x, this.y, this.size, this.size);
  this.twinkle();
};

Star.prototype.twinkle = function() {
  if (random() > 0.5) {
    this.opacity += 10;
  } else {
    this.opacity -= 10;
  }
  if (this.opacity > 255) {
    this.opacity = 255;
  }
  if (this.opacity < 50) {
    this.opacity = 50;
  }
  this.color = color(255, 255, 0, this.opacity);
};


  
   // Body
  
  
  
  // Body
function drawAmongUs(){
  translate(x,y)
  rotate(angle)
  ellipseMode(CENTER);
  stroke(0)
  strokeWeight(4)
  fill(40);
  ellipse(0, 0, 75, 105);
 
  //backpack
  fill(40);
  translate(-40,0)
  ellipse(0, 0, 30, 50);
  
  //visor
  stroke(0,0,200)
  fill(51,204,255)
  translate(55, -15)
  ellipse(0, 0, 50, 30)

 //legs
  stroke(0)
  fill(30);
  translate(0,63)
  ellipse(0, 0,18,30);
  translate(-28, 0)
  ellipse(0, 0,18,30);
  x+=10;
  y-=7;
  angle+=1;
  
  if (x>=400){
      x =-100;
  } 
  if (y<=0){
      y=400;
    
  

  }
 }