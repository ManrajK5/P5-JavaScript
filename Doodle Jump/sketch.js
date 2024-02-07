let doddleBob;
let doodleBobSize;
let doodleBobY, doodleBobX;
let platformX, platformY;
let platformW=100; platformL=20;
let startGame;
let highScore = 0;
let numOfPlatforms=10;
let platformYChange=0;



function preload(){
  doodleBob = loadImage("images/doodlebob.png")
  backGround = loadImage("images/background.png")
  platform = loadImage("images/platform.png")
}


platformList=[]

function setup() {
  createCanvas(500, 600);
  startGame = false;
}

function draw() {
  background(238, 228, 223);
  if(startGame == true) {
    //Set up and draw the game
    drawPlatforms();
    drawDoodleBob();
    collisionCheck();
    moveDoodler();
    moveScreen();
  }else{
  image(backGround, 0, 0, 500, 600)
  fill(0)
  textSize(50)
  text("Start\nGame", 190, 200)
  textSize(30)
  text("High\nScore: "+highScore, 200, 330)
}
//Drawing Doodle Bob
  function drawDoodleBob(){
  image(doodleBob, doodleBobX, doodleBobY, doodleBobSize, doodleBobSize)
}
//Moving Doodle Bob with keybinds
function moveDoodler() {
  // doodler falls with gravity
  doodlerVelocity += 0.2;
  doodlerY += doodlerVelocity;

  if (keyCode==LEFT_ARROW) {
    doodleBobX -= 4;
  }
  if (keyCode==RIGHT_ARROW) {
    doodleBobY += 4;
  }
}
//moving the screen for continous platforms
function ScreenY() {
  if(doodleBobY < 250) {
    platformY = 3;
    doodleBobV += 0.25;
  } else {
    platformY = 0;
  }
}}
//Starting Game
function mousePressed() {
  if(startGame == false) {
    score = 0;
    setupPlatforms();
    doodlerY = 350;
    doodlerX = platformList[platformList.length - 1].xPos + 15;
    doodleBobV = 0.1;
    startGame = true;
  }
}

//Platforms
function setupPlatforms() {
  for(let i=0; i < numOfPlatforms; i++) {
    let platGap = height / numOfPlatforms;
    let newPlatformYPosition = i * platGap;
    let plat = new Platform(newPlatformYPosition);
    platformList.push(plat);
  }
}

function drawPlatforms() {
  fill(106, 186, 40);
  platformList.forEach(function(plat) {
    // move all platforms down
    plat.yPos += platformYChange;
    image(platform, plat.xPos, plat.yPos, plat.width, plat.height);

    if(plat.yPos > 600) {
      score++;
      platformList.pop();
      var newPlat = new Platform(0);
      platformList.unshift(newPlat); // add to front
    }
  });
}

function Platform(newPlatformYPosition) {
  this.xPos = random(15, 300);
  this.yPos = newPlatformYPosition;
  this.width = platformW;
  this.height = platformL;
}