function setup() {
  noStroke();
  createCanvas(400, 400);
  background(176, 196, 222);//lightSteelBlue
  fill(139, 69, 19);//saddleBrown
  ellipse(205, 205, 310,310);
  fill(205, 133, 63);//peru
  ellipse(200, 200, 300, 300);
  fill(90, 35, 15);
  
  ellipse(140, 90, 10, 10);
  ellipse(215, 150 , 10, 10);
  ellipse(275, 100 , 10, 10);
  ellipse(315, 200 , 10, 10);
  ellipse(270, 300 , 10, 10);
  ellipse(230, 240 , 10, 10);
  ellipse(150, 315 , 10, 10);
  ellipse(150, 245 , 10, 10);
  ellipse(80, 220 , 10, 10);
  ellipse(120, 155, 10, 10);  
  fill (176, 196, 222);//lightSteelBlue
  ellipse(50, 200, 40, 40);    
}
function draw() {
  if (mouseIsPressed)
  ellipse(mouseX, mouseY, 150, 150);

}