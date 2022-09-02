

function setup() {
  createCanvas(600, 600);
  
}

function draw() {
  background(0,68,85);

  let g = 197

  strokeWeight(2);
  stroke(175,g,234);
  noFill();

  for (scalesX = 0; scalesX <= 500; scalesX = scalesX + 55) {
    for (scalesY = 0; scalesY <= 550; scalesY = scalesY + 55){

      stroke(174,g,190);

  let x = 50 + scalesX
  let y = 50 + scalesY
  let w = 45
  let h = 40


  for ( y = 50; y < 550; y = y + 40)
  
  arc(x,y, w,h, 0,3.14)

  x = 70 + scalesX
  y = 30 + scalesY
  for (y = 30; y < 550; y = y + 40)
  arc(x,y, w,h, 0,3.14)
  g = g + .5
  }
}


}
