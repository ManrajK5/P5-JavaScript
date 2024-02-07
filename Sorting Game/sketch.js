let screenType = "WelcomeScreen";
let img;
let back;
let sorted = false;

class ArraySorter {
  constructor() {
    this.array = [10, 50, 2, 40, 15, 47, 23, 8, 49, 27, 13, 40, 35, 17];
    this.colors = [];
    this.randomizeButton = null;
    this.nextButton = null;
    this.resetButton = null;
    this.currentIndex = 1;
    this.currentIndex2 = 1;
    this.arrayLength = 14;
    this.rectangle = null;
  }

  setup() {
    createCanvas(700, 600);

    for (let i = 0; i < this.arrayLength; i++) {
      this.colors.push("#BBDEFB");
    }

    this.nextButton = createButton("Next Step");
    this.nextButton.mouseClicked(() => this.nextStep());

    this.resetButton = createButton("Reset");
    this.resetButton.mouseClicked(() => location.reload());

    this.oval = new Oval(width - 100, 20, 80, 40);
    this.desk = new Desk(width - 100, 20, 80, 40);
    this.computer = new Computer(width - 100, 20, 80, 40);
    this.textbox = new TextBox(width - 100, 20, 80, 40);
    this.computeraccessories = new ComputerAccessories(width - 100, 20, 80, 40);
    this.textbox = new TextBox(
      width - 100,
      20,
      80,
      30,
      "Sorting in progress..."
    );
    this.nextsteps = new Nextsteps(width - 100, 20, 80, 40);
  }

  draw() {
    background(51);

    fill(250);
    textFont("monospace");
    textSize(25);
    text("Insertion Sort", 130, 40);
    fill(100);
    textSize(15);

    noFill();
    noStroke();

    for (let i = 0; i < this.array.length; i++) {
      if (i === this.currentIndex) {
        this.colors[i] = "#FF1744";
      } else if (i === this.currentIndex2) {
        this.colors[i] = "#388E3C";
      } else {
        this.colors[i] = "#9C27B0";
      }
    }

    this.printArrayBar(height - 100);
    this.drawSortingLine(height - 110); // New code added here

    if (
      this.currentIndex === this.arrayLength &&
      this.currentIndex2 === this.arrayLength
    ) {
      fill(250);
      textSize(18);
      text("Array Sorted!", 45, height - 50);
      sorted = true;
    }

    if (screenType === "Array") {
      this.oval.display();
      this.desk.display();
      this.computer.display();
      this.computeraccessories.display();
      this.textbox.display();
      this.nextsteps.display();
    }
  }

  printArrayBar(y) {
    let x = width - 35; // Starting x-position

    for (let i = this.array.length - 1; i >= 0; i--) {
      fill(this.colors[i]);
      this.printBar(x, y, this.array[i]);
      x -= 30; // Move to the left for the next bar
    }
  }

  printBar(x, y, number) {
    const ratio = number * 7;
    rect(x, y - ratio, 20, ratio);
    text(number, x + 2, y + 25);
  }

  drawSortingLine(y) {
    const lineStartX = width - 35;
    const lineEndX =
      width - 35 - (this.arrayLength - this.currentIndex + 1) * 30;

    stroke(255);
    line(lineStartX + 40, y - 110000, lineEndX + 55, y + 9);
    strokeWeight(3);
    noStroke();
    fill(51);
    rect(290, 0, 500, 145);

    if (!sorted) {
      fill(255);
      textAlign(RIGHT, TOP);
      textSize(12);
      text("unsorted", lineStartX + 35, y + 14);
    } else if (sorted) {
      fill(255);
      textAlign(RIGHT, TOP);
      textSize(12);
      text(" ", lineStartX + 25, y + 20);
    }

    textAlign(LEFT, TOP);
    textSize(12);
    text("sorted", lineEndX - 20, y + 14);
  }

  nextStep() {
    if (this.currentIndex < this.arrayLength) {
      if (
        this.currentIndex2 > 0 &&
        this.array[this.currentIndex2 - 1] > this.array[this.currentIndex2]
      ) {
        const temp = this.array[this.currentIndex2];
        this.array[this.currentIndex2] = this.array[this.currentIndex2 - 1];
        this.array[this.currentIndex2 - 1] = temp;
        this.currentIndex2--;
      } else {
        this.currentIndex++;
        this.currentIndex2 = this.currentIndex;
        this.updateTextboxText();
      }
    } else {
      this.updateTextboxText();
    }
    if (
      this.currentIndex === this.arrayLength &&
      this.currentIndex2 === this.arrayLength
    ) {
      this.isSorted = this.isArraySorted(); // Check if the array is fully sorted
    }

    this.updateTextboxText();
  }

  isArraySorted() {
    for (let i = 1; i < this.array.length; i++) {
      if (this.array[i] < this.array[i - 1]) {
        return false;
      }
    }
    return true;
  }

  updateTextboxText() {
    const currentIndexText =
      this.array[this.currentIndex] + " is being held in temp.";
    const currentIndexText2 =
      this.array[this.currentIndex2] + " is being shifted to the left.";

    this.textbox.isSorted = this.isSorted;

    this.textbox.text1 = currentIndexText;
    this.textbox.text2 = currentIndexText2;
  }
}

class Accountant {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = 90;
  }

  display() {
    //image
    image(img, this.x - 170, this.y + 50, this.width + 170, this.height + 210);

    // Body
    noStroke();
    fill(68, 68, 68);
    rect(this.x + 10, this.y - 20, this.width + 5, this.height - 40, 10);

    // Head
    fill(236, 206, 185);
    ellipse(this.x + this.width / 2 + 12, this.y - 40, 50, 50); // Increased head size

    // Eyes
    fill(0);
    ellipse(this.x + this.width / 2, this.y - 45, 10, 10); // Adjusted eye position
    ellipse(this.x + this.width / 2 + 20, this.y - 50, 10, 10); // Adjusted eye position

    // Suit
    fill(0);
    rect(this.x + 10, this.y - 20, this.width + 5, this.height - 60, 10);

    // Tie
    fill(255, 0, 0);
    triangle(
      this.x + this.width / 2 + 20,
      this.y - 20,
      this.x + this.width / 2 + 2,
      this.y - 20,
      this.x + this.width / 2 + 10,
      this.y - 0
    );
  }
}

class Oval {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  display() {
    noFill();
    stroke(255, 0, 0);
    ellipse(this.x - 120, this.y + 50, this.width + 300, this.height + 60);
  }
}

class Desk {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  display() {
    fill(94, 59, 24);
    noStroke();
    rect(this.x - 560, this.y + 130, this.width + 60, this.height - 25);
    rect(this.x - 560, this.y + 130, this.width - 70, this.height);
    rect(this.x - 430, this.y + 130, this.width - 70, this.height);
  }
}

class ComputerAccessories {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  display() {
    fill(98, 112, 112);
    noStroke();
    rect(this.x - 455, this.y + 130, this.width - 50, this.height - 35);
    ellipse(this.x - 440, this.y + 140, this.width - 60, this.height - 35);
  }
}

class Computer {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  display() {
    fill(0);
    noStroke();
    rect(this.x - 500, this.y + 130, this.width - 40, this.height - 45);
    rect(this.x - 485, this.y + 110, this.width - 70, this.height - 25);
    rect(this.x - 515, this.y + 80, this.width - 10, this.height - 5);
  }
}

class TextBox {
  constructor(x, y, width, height, text1 = "", text2 = "") {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text1 = text1;
    this.text2 = text2;
    this.isSorted = false;
  }

  display() {
    fill(0);
    noStroke();
    textSize(16);
    textAlign(CENTER, CENTER);
    fill(255);
    noStroke();

    if (this.isSorted) {
      textSize(16);
      text("Congrats! The Array is Sorted 😁", this.x - 120, this.y + 50);
    } else {
      textSize(16);
      text(this.text1, this.x - 120, this.y + 35);
      text(this.text2, this.x - 120, this.y + 63);
    }
  }
}
class Nextsteps {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  display() {
    fill(255);
    textSize(14);
    text("Click Next Step to continue", 120, 580);
  }
}

const sorter = new ArraySorter();
const accountant = new Accountant(180, 150);

function preload() {
  img = loadImage("BoxCode.PNG");
  back = loadImage("background.gif");
}

function setup() {
  createCanvas(700, 600);
  sorter.setup();
}

function draw() {
  background(0);
  if (screenType === "WelcomeScreen") {
    welcomeScreen(100, 100);
  } else if (screenType === "Array") {
    sorter.draw();
    accountant.display();
    drawMovingBox();
  }
}

function drawMovingBox() {
  const boxX = 20; // X-coordinate of the box
  const boxY = 363; // Y-coordinate of the box
  const boxWidth = 230; // Width of the box
  const boxHeight = 15; // Height of the box

  const boxX2 = 20; // X-coordinate of the second box
  const boxY2 = 388; // Y-coordinate of the second box
  const boxWidth2 = 230; // Width of the second box
  const boxHeight2 = 55; // Height of the second box

  const boxX3 = 20; // X-coordinate of the third box
  const boxY3 = 440; // Y-coordinate of the third box
  const boxWidth3 = 230; // Width of the third box
  const boxHeight3 = 15; // Height of the third box

  // Highlight the boxes based on the indices
  if (
    (sorter.currentIndex === 2 && sorter.currentIndex2 === 1) ||
    (sorter.currentIndex === 3 && sorter.currentIndex2 === 2) ||
    (sorter.currentIndex === 4 && sorter.currentIndex2 === 3) ||
    (sorter.currentIndex === 5 && sorter.currentIndex2 === 4) ||
    (sorter.currentIndex === 6 && sorter.currentIndex2 === 5) ||
    (sorter.currentIndex === 6 && sorter.currentIndex2 === 4) ||
    (sorter.currentIndex === 7 && sorter.currentIndex2 === 6) ||
    (sorter.currentIndex === 7 && sorter.currentIndex2 === 5) ||
    (sorter.currentIndex === 7 && sorter.currentIndex2 === 4) ||
    (sorter.currentIndex === 7 && sorter.currentIndex2 === 3) ||
    (sorter.currentIndex === 7 && sorter.currentIndex2 === 2) ||
    (sorter.currentIndex === 8 && sorter.currentIndex2 === 7) ||
    (sorter.currentIndex === 9 && sorter.currentIndex2 === 8) ||
    (sorter.currentIndex === 9 && sorter.currentIndex2 === 7) ||
    (sorter.currentIndex === 9 && sorter.currentIndex2 === 6) ||
    (sorter.currentIndex === 10 && sorter.currentIndex2 === 9) ||
    (sorter.currentIndex === 10 && sorter.currentIndex2 === 8) ||
    (sorter.currentIndex === 10 && sorter.currentIndex2 === 7) ||
    (sorter.currentIndex === 10 && sorter.currentIndex2 === 6) ||
    (sorter.currentIndex === 10 && sorter.currentIndex2 === 5) ||
    (sorter.currentIndex === 10 && sorter.currentIndex2 === 4) ||
    (sorter.currentIndex === 11 && sorter.currentIndex2 === 10) ||
    (sorter.currentIndex === 11 && sorter.currentIndex2 === 9) ||
    (sorter.currentIndex === 12 && sorter.currentIndex2 === 11) ||
    (sorter.currentIndex === 12 && sorter.currentIndex2 === 10) ||
    (sorter.currentIndex === 12 && sorter.currentIndex2 === 9) ||
    (sorter.currentIndex === 12 && sorter.currentIndex2 === 8) ||
    (sorter.currentIndex === 13 && sorter.currentIndex2 === 12) ||
    (sorter.currentIndex === 13 && sorter.currentIndex2 === 11) ||
    (sorter.currentIndex === 13 && sorter.currentIndex2 === 10) ||
    (sorter.currentIndex === 13 && sorter.currentIndex2 === 9) ||
    (sorter.currentIndex === 13 && sorter.currentIndex2 === 8) ||
    (sorter.currentIndex === 13 && sorter.currentIndex2 === 7) ||
    (sorter.currentIndex === 13 && sorter.currentIndex2 === 6)
  ) {
    stroke(255, 0, 0); // Red color for the second box border
    noFill(); // Disable filling the box with a color
    rect(boxX2, boxY2, boxWidth2, boxHeight2);
  } else if (
    (sorter.currentIndex === 2 && sorter.currentIndex2 === 0) ||
    (sorter.currentIndex === 4 && sorter.currentIndex2 === 2) ||
    (sorter.currentIndex === 6 && sorter.currentIndex2 === 3) ||
    (sorter.currentIndex === 7 && sorter.currentIndex2 === 1) ||
    (sorter.currentIndex === 9 && sorter.currentIndex2 === 5) ||
    (sorter.currentIndex === 10 && sorter.currentIndex2 === 3) ||
    (sorter.currentIndex === 11 && sorter.currentIndex2 === 8) ||
    (sorter.currentIndex === 12 && sorter.currentIndex2 === 7) ||
    (sorter.currentIndex === 13 && sorter.currentIndex2 === 5)
  ) {
    stroke(0, 0, 255); // Blue color for the third box border
    noFill(); // Disable filling the box with a color
    rect(boxX3, boxY3, boxWidth3, boxHeight3);
  } else if (sorter.currentIndex === sorter.currentIndex2) {
    stroke(0, 255, 0); // Green color for the box border
    noFill(); // Disable filling the box with a color
    rect(boxX, boxY, boxWidth, boxHeight);
  }
}

function welcomeScreen(x, y) {
  image(back, x - 75, y - 75, 650, 550);
  fill(255);
  noStroke();
  textFont("GOTHAM");
  textSize(40);
  strokeWeight(2);
  textAlign(CENTER, CENTER); // Align the text in the center
  text("INSERTION", x + 90, y - 40); // Updated title
  text("SORT", x + 90, y + 20); // Updated title
  textSize(20);
  text("Justin, Faraz and Manraj", x + 90, y + 430); // Adjusted the text position

  if (
    mouseX > x - 65 &&
    mouseX < x + 85 &&
    mouseY > y + 350 &&
    mouseY < y + 400
  ) {
    fill(255);
    stroke(0);
    rect(x - 65, y + 350, 150, 50, 2);
    fill(255);
    textSize(30);
    text("START", x + 7, y + 380);
  } else {
    noFill();
    stroke(0);
    rect(x - 65, y + 350, 150, 50, 2);
    fill(255);
    textSize(30);
    text("START", x + 7, y + 380);
  }
}

function mousePressed() {
  if (
    screenType === "WelcomeScreen" &&
    mouseX > 70 &&
    mouseX < 220 &&
    mouseY > 450 &&
    mouseY < 500
  ) {
    screenType = "Array";
  }
}
