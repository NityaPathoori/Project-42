

function setup() {
  createCanvas(800,800);

  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
 
  var hr = hour();
  var mn = minute();
  var sc = second(); 
  ellipse(400,400,600,600);

  textSize(24);
  fill("black");
  text("12",400,150);
  text("3",650,400);
  text("6",400,650);
  text("9",150,400);

  var scAngle = map(sc,0,60,0,360);
  var mnAngle = map(mn,0,60,0,360);
  var hrAngle = map(hr%12,0,12,0,360);

  translate(400,400);
  rotate(-90);
  strokeWeight(5);
  
  push();
  rotate(scAngle);
  stroke("green");
  line(0,0,200,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("red");
  line(0,0,150,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("blue");
  line(0,0,100,0);
  pop();

  noFill();
  stroke("green");
  arc(0,0,600,600,0,scAngle);
  stroke("red");
  arc(0,0,650,650,0,mnAngle);
  stroke("blue");
  arc(0,0,700,700,0,hrAngle);

  drawSprites();
}