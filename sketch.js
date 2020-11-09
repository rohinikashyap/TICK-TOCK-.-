var h,m,s;
var sAngle;

function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);
}

function draw() {
  background("black");  

  h = hour();
  m = minute();
  s = second();

  translate(260,260)
  rotate(-90)
 
  sAngle = map(s,0,60,0,360)
  mAngle = map(m,0,60,0,360)
  hAngle = map(h%12,0,60,0,360)

  push();
  rotate(sAngle);
  stroke("#FF0000");
  strokeWeight(7);
  line(0,0,100,0);
  pop();


  push();
  rotate(mAngle);
  stroke("#39ff14");
  strokeWeight(7);
  line(0,0,90,0);
  pop();

  push();
  rotate(hAngle);
  stroke("#1b03a3");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  noFill()
  stroke("#FF0000")
  strokeWeight(7)
  arc(0, 0, 340, 340, 2, sAngle);

  noFill()
  stroke("#39ff14")
  strokeWeight(7)
  arc(0, 0, 310, 310, 2, mAngle);

  noFill()
  stroke("#1b03a3")
  strokeWeight(7)
  arc(0, 0, 280, 280, 2, hAngle);

  fill("yellow")
  stroke("yellow")
  circle(0, 0, 10);

  drawSprites();
}