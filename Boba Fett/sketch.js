// sketch.js
//shine moves from 160 to 474 based on mouseX
function setup() {
  createCanvas(600, 600);

}

shinetLeftX = bobaX - 145;
shinebLeftX = bobaX - 155;
shinebRightX = bobaX - 135;
shinetRightX = bobaX - 125;


function draw() {
  background(128);

  // Bobafett

  let bobaX = 300;
  let bobaY = 300;

   //Sensor Top Piece

   let antennaX = bobaX - 160;
   let antennaY = bobaY - 150;

   stroke(61,94,59);
   strokeWeight(3);
   fill(81,114,79);
   beginShape();
   vertex(antennaX - 4,antennaY - 75);
   vertex(antennaX - 4,antennaY - 50);
   vertex(antennaX + 65,antennaY - 50);
   vertex(antennaX + 65,antennaY - 57.5);
   vertex(antennaX + 35,antennaY - 75);
   vertex(antennaX + 10,antennaY - 75);
   endShape(CLOSE);


  
  //Antenna

 stroke(194,194,194);
 strokeWeight(3);
 fill(204,204,204);
 rect(antennaX,antennaY,10,150);

 let sensorbX = bobaX - 150;

 //Sensor Bottom Piece
 stroke(225,207,133);
 strokeWeight(3)
 fill(235,217,143);
 rectMode(CENTER);
 rect(sensorbX,bobaY,55,150);


  // Helmet
  let headWidth = 320
  let headHeight = 360
  let headX = headWidth / 2;
  let headY = headHeight / 2;
  stroke(61,94,59);
  strokeWeight(3)
  fill(81,114,79);
  rectMode(CENTER);
  rect(bobaX,bobaY,headWidth,headHeight,headWidth,headHeight,0,0);

  //Visor
  //Visor Vertical

  stroke(0);
  strokeWeight(3);
  fill(0,0,0);
  rectMode(CENTER);
  rect(bobaX,bobaY + 80,50,200);

  //Visor Horizontal

  let visortRightX = bobaX + 155;
  let visortRightY = bobaY - 65;

  let visorbRightX = bobaX + 159;
  let visorbRightY = bobaY - 45;

  let visortLeftX = bobaX - 159;
  let visortLeftY = bobaY - 45;

  let visorbLeftX = bobaX - 155;
  let visorbLeftY = bobaY - 65;
  

  stroke(0);
  strokeWeight(0);
  fill(0,0,0);
  beginShape();
  vertex(bobaX,bobaY);
  vertex(bobaX + 25,bobaY);
  vertex(visorbRightX,visorbRightY);
  vertex(visortRightX,visortRightY);
  vertex(visorbLeftX,visorbLeftY);
  vertex(visortLeftX,visortLeftY);
  endShape(CLOSE)

  //Shine

//shine moves from 160 to 474 based on mouseX

let ratioX = mouseX / width;

let shineX = ratioX *  284 + 160;

let shineY = bobaY + 55
stroke(0)
fill(255,255,255)
rectMode(CENTER)
rect(shineX,shineY,15,245)

//Helmet Top Layer
//Left
stroke(0)
strokeWeight(0)
fill(81,114,79)
quad(143,270, 143,478, 267.5,478, 267.5, 280)

//Right
stroke(0)
strokeWeight(0)
fill(81,114,79)
quad(457,270, 457,478, 332.5,478, 332.5, 280)

//Red Outline - Top


stroke(255,0,0);
strokeWeight(0);
fill(200,0,0);
beginShape();
vertex(bobaX - 155,bobaY - 65);
vertex(bobaX + 155,bobaY - 65);
vertex(bobaX + 152,bobaY - 75);
vertex(bobaX - 152,bobaY - 75);
endShape(CLOSE);

//Red Outline - Left Top

stroke(255,0,0);
strokeWeight(0);
fill(200,0,0);

let LredblX = bobaX - 161;
let LredblY = bobaY - 30;

let LredbrX = bobaX - 27;
let LredbrY = bobaY;

let LredtrX = bobaX - 26.5;
let LredtrY = bobaY - 20;

let LredtlX = bobaX - 158.5;
let LredtlY = bobaY - 51;

beginShape();
vertex(LredblX,LredblY);
vertex(LredbrX,LredbrY);
vertex(LredtrX,LredtrY);
vertex(LredtlX,LredtlY);
endShape(CLOSE);

//Red Outline - Left Rect

stroke(255,0,0);
strokeWeight(0);
fill(200,0,0);
rectMode(CENTER);
rect(bobaX - 32.5,bobaY + 83,12,197);

//Red Outline - Right Top

stroke(255,0,0);
strokeWeight(0);
fill(200,0,0); 
let RredblX = bobaX + 161;
let RredblY = bobaY - 30;

let RredbrX = bobaX + 27;
let RredbrY = bobaY;

let RredtrX = bobaX + 26.5;
let RredtrY = bobaY - 20;

let RredtlX = bobaX + 158.5;
let RredtlY = bobaY - 51;

beginShape();
vertex(RredblX,RredblY);
vertex(RredbrX,RredbrY);
vertex(RredtrX,RredtrY);
vertex(RredtlX,RredtlY);
endShape(CLOSE);

//Red Outline - Right Rect
stroke(255,0,0);
strokeWeight(0);
fill(200,0,0);
rectMode(CENTER);
rect(bobaX + 32.5,bobaY + 83,12,197);

//Yellow Squares

let yrectY = bobaY - 95
let yrectX = bobaX + 75

//Yellow Square 1
stroke(255,0,0);
strokeWeight(0);
fill(250,200,0);
rectMode(CENTER);
rect(yrectX,yrectY,8,27);

//Yellow Square 2
stroke(255,0,0);
strokeWeight(0);
fill(250,200,0);
rectMode(CENTER);
rect(yrectX + 15,yrectY,8,27);

//Yellow Square 3
stroke(255,0,0);
strokeWeight(0);
fill(250,200,0);
rectMode(CENTER);
rect(yrectX + 30,yrectY,8,27);

//Yellow Square 4
stroke(255,0,0);
strokeWeight(0);
fill(250,200,0);
rectMode(CENTER);
rect(yrectX + 45,yrectY,8,27);

//Left Dent

let triangleX = bobaX - 140;
let triangleY = bobaY + 150;


stroke(0);
strokeWeight(0);
fill(61,94,59);
triangle(triangleX,bobaY, triangleX + 90,triangleY, triangleX,triangleY);

triangleX = bobaX + 140;

//Right dent
stroke(0);
strokeWeight(0);
fill(61,94,59);
triangle(triangleX,bobaY, triangleX - 90,triangleY, triangleX,triangleY);
  

}
