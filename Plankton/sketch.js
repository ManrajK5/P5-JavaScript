let x = 0;
let y = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  rectMode(CENTER);
    background(255);
    fill(255)

  //Ground
  fill(0,0, 255)
  rect(200, 350, 400, 100);
  //Body
  fill(0, 153, 0)
  noStroke()
  arc(200, 220, 80, 100, 0, PI);
  rect(200, 170, 80, 100)
  arc(200, 120, 80, 100, PI, TWO_PI);
  //Legs
  stroke(0, 153, 0)
  triangle(175, 299, 170, 250, 185, 250);
  triangle(225, 299, 230, 250, 215, 250);
  //Arms
  triangle(120, 200, 200, 120, 220, 150)
  triangle(280,200, 200, 120, 180, 150)
  //Eyes
  fill(255,255,0)
  ellipse(200, 140, 35, 40)
  //Ears
  fill(0, 153, 0)
  arc(180, 85, 10, 120, PI, PI+HALF_PI)
  arc(220, 85, 10, 120, PI+HALF_PI, 0)
  //Mouth
  stroke(0)
  line(180, 190, 220, 190)
  //Text
  textSize(20)
  fill(5,125,205);
  text("Bring me the\nKrabby Patty!",5,50);
  fill(200, 0, 0)
  ellipse(mouseX/25+192,mouseY/25+135,10,15);
  
  //Mouse
  cursor('https://icons.iconarchive.com/icons/iconmuseo/fast-food/32/burger-2-icon.png');
  
  
  
  x=x+1
}