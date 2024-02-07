/* Frogger start-up code */
//LOWER ROAD, CARS MOVING RIGHT
//the x coordinate for the lower road cars moving right,
//uncomment the lines and add values to place the cars
let carx1_lower_right = 50;
let carx2_lower_right = 150;
let carx3_lower_right = 250;
let carx4_lower_right = 350;
let carsY_lower_right = 384; //y coord lower road cars,right
let color_lower_right; //color cars lower road moving right

//LOWER ROAD, CARS MOVING LEFT
//the x coordinate for the lower road cars moving left,
//uncomment the lines and add values to place the cars
let carx1_lower_left = 350;
let carx2_lower_left = 250;
let carx3_lower_left = 150;
let carx4_lower_left = 50;
let carsY_lower_left = 335; //y coord lower road cars,right
let color_lower_left; //color cars moving left,lower road

//UPPER ROAD, CARS MOVING RIGHT
//the x coordinate for all the upper road cars moving right,
//uncomment the lines and add values to place the cars
let carx1_upper_right = 50;
let carx2_upper_right = 150;
let carx3_upper_right = 250;
let carx4_upper_right = 350;
let carsY_upper_right = 210; //y coord upper road cars,right
let color_upper_right; //color cars moving right,upper road

//UPPER ROAD, CARS MOVING LEFT
//the x coordinate for all the upper road cars moving left,
//uncomment the lines and add values to place the cars
let carx1_upper_left = 350;
let carx2_upper_left = 250;
let carx3_upper_left = 150;
let carx4_upper_left = 50;
let carsY_upper_left = 163; //y coord upper road, right
let color_upper_left; //color cars moving left,upper road
let frogX = 165,
  frogY = 410,
  frogWidth = 70,
  frogHeight = 80;
let lives = 3;
let egg;
let barn;

function preload() {
  egg = loadImage("images/egg.png");
  chicken = loadImage("images/lil_chick.svg");
}
//replace variables with arrays
let carx_lower_right = [];
let carx_lower_left = [];
let carx_upper_right = [];
let carx_upper_left = [];

function setup() {
  createCanvas(400, 500);
  noStroke();
  //color for cars moving right,lower road
  color_lower_right = color(250, 0, 0);
  //a color for cars moving left, lower road
  color_lower_left = color(0, 0, 250);
  //a color for cars moving right, upper road
  color_upper_right = color(0, 250, 0);
  //a color for cars moving left, upper road
  color_upper_left = color(250, 250, 0);
  rectMode(CENTER);
  //initialize the first array
  carx_lower_right[0] = 50;
  carx_lower_right[1] = 150;
  carx_lower_right[2] = 250;
  carx_lower_right[3] = 350;
  //second array
  carx_lower_left[0] = 70;
  carx_lower_left[1] = 170;
  carx_lower_left[2] = 270;
  carx_lower_left[3] = 370;
  //third array
  carx_upper_right[0] = 50;
  carx_upper_right[1] = 150;
  carx_upper_right[2] = 250;
  carx_upper_right[3] = 350;
  //fourth array
  carx_upper_left[0] = 40;
  carx_upper_left[1] = 140;
  carx_upper_left[2] = 240;
  carx_upper_left[3] = 340;
}

function draw() {
  //call the drawBackground function
  drawBackground();
  noStroke();

  //array/loop for lower cars going right
  for (let i = 0; i < 4; i++) {
    drawCar(carx_lower_right[i], carsY_lower_right, color_lower_right);
    carx_lower_right[i] = carx_lower_right[i] + 1;
    if (carx_lower_right[i] >= 450) {
      carx_lower_right[i] = -50;
    }
    //check for collision with this car
    if (collisionCheck(carx_lower_right[i], carsY_lower_right, 0, 0)) {
      print("collision");
      lives--;
      froxX = 200;
      frogY = 410;
      //do something, minus a life, send frog at original location
    }
  }

  //array/loop code for lower cars going left
  for (let i = 0; i < 4; i++) {
    drawCar(carx_lower_left[i], carsY_lower_left, color_lower_left);
    carx_lower_left[i] = carx_lower_left[i] - 1;
    if (carx_lower_left[i] < -50) {
      carx_lower_left[i] = 450;
    }
    //check for collision with this car
    if (collisionCheck(carx_lower_left[i], carsY_lower_left, 0, 0)) {
      print("collision");
      lives--;
      froxX = 200;
      frogY = 410;
      //do something, minus a life, send frog at original location
    }
  }

  //array/loop code for upper cars going right
  for (let i = 0; i < 4; i++) {
    drawCar(carx_upper_right[i], carsY_upper_right, color_upper_right);
    carx_upper_right[i] = carx_upper_right[i] + 2;
    if (carx_upper_right[i] >= 450) {
      carx_upper_right[i] = -50;
    }
    //check for collision with this car
    if (collisionCheck(carx_upper_right[i], carsY_upper_right, 0, 0)) {
      print("collision");
      lives--;
      froxX = 200;
      frogY = 410;
      //do something, minus a life, send frog at original location
    }
  }

  //array/loop for upper cars going left
  for (let i = 0; i < 4; i++) {
    drawCar(carx_upper_left[i], carsY_upper_left, color_upper_left);
    carx_upper_left[i] = carx_upper_left[i] - 2;
    if (carx_upper_left[i] < -50) {
      carx_upper_left[i] = 450;
    }
    //check for collision with this car
    if (collisionCheck(carx_upper_left[i], carsY_upper_left, 0, 0)) {
      print("collision");
      lives--;
      froxX = 200;
      frogY = 410;
      //do something, minus a life, send frog at original location
    }
  }

  //text displaying amount of lives
  textSize(20);
  text(lives + " lives left", 10, 440);
  fill(0);
  text("Come to mama", 135, 100);

  //egg
  fill(34, 139, 34);
  image(egg, frogX, frogY, frogWidth, frogHeight);

  //chicken
  image(chicken, 100, -30, 200, 200);

  if (lives == 0) {
    fill(200, 0, 0);
    rect(200, 250, 500, 500);
    textSize(100);
    fill(0);
    text("Game \nOver", 80, 220);
    textSize(20);
    text("(You died and will be \n cooked sunny side up)", 80, 400);
  }
}

//key arrow functions
function keyPressed() {
  if (keyCode == UP_ARROW) {
    frogY = frogY - 15;
  } else if (keyCode == DOWN_ARROW) {
    frogY = frogY + 15;
  } else if (keyCode == RIGHT_ARROW) {
    frogX = frogX + 15;
  } else if (keyCode == LEFT_ARROW) {
    frogX = frogX - 15;
  }
}

/* a function that draws the  background*/
function drawBackground() {
  //draw the background below.
  //use rect()for roads and ellipse for lake
  background(0, 190, 0); //change to any green you like
  //draw the two roads, one is done for you
  noStroke();
  fill(125);
  rect(200, 360, 400, 100);
  rect(200, 185, 400, 100);

  stroke(0);
  line(0, 360, 400, 360);

  fill(125);

  stroke(0);
  line(0, 185, 400, 185);
}

/* a function that draws a car with a given color*/
function drawCar(carX, carY, c) {
  fill(c);
  rect(carX, carY, 50, 20);
}

function collisionCheck(other_x, other_y, other_width, other_height) {
  return (
    frogX < other_x + other_width &&
    frogX + frogWidth > other_x &&
    frogY < other_y + other_height &&
    frogY + frogHeight > other_y
  );
}
