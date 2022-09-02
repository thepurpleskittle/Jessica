// sketch.js

let lightA = false;
let lightB = false;
let lightC = false;

function setup() {
  createCanvas(600, 600);

}

function draw() {
  background(128);

  //Rectangles
  let boxSize = 75
  let boxY = 250
  let boxAx = 70;
  let boxBx = 195;
  let boxCx = 320;
  let boxDx = 455;

  //Box A
  strokeWeight(5);
  stroke(0);
  if (mouseX >= boxAx && mouseX <= boxAx + boxSize &&
    mouseY >= boxY && mouseY <= boxY + boxSize) {
    lightA = true
  }
  if (lightA == true) {
    fill(255, 0, 0)
  }
  else {
    fill(255)
  }
  rect(boxAx, boxY, boxSize, boxSize);


  // Box B

  strokeWeight(5);
  stroke(0);
  if (mouseX >= boxBx && mouseX <= boxBx + boxSize &&
    mouseY >= boxY && mouseY <= boxY + boxSize && lightA == true) {
    lightB = true
  }
  if (lightB == true) {
    fill(0, 255, 0)
  }
  else {
    fill(255)
  }
  rect(boxBx, boxY, boxSize, boxSize);

  // Box C

  strokeWeight(5);
  stroke(0);
  if (mouseX >= boxCx && mouseX <= boxCx + boxSize &&
    mouseY >= boxY && mouseY <= boxY + boxSize && lightB == true) {
    lightC = true
  }
  if (lightC == true) {
    fill(0, 0, 255);
  }
  else {
    fill(255);
  }
  rect(boxCx, boxY, boxSize, boxSize);

  //Box D


  strokeWeight(5);
  stroke(0);
  if (mouseX >= boxDx && mouseX <= boxDx + boxSize &&
    mouseY >= boxY && mouseY <= boxY + boxSize) {
    lightA = false
    lightB = false
    lightC = false
  }
  else {
    fill(255);
  }

  rect(boxDx, boxY, boxSize, boxSize);



}
