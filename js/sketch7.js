var font;
var xPosition = 50;
var speed = 10;
wasMovingLeft = -10;
var clothes;
var luggage;
var suit;

function preload(){
  font = loadFont('sofiasans.ttf');
  clothes = loadImage('img/clothes.png');
  luggage = loadImage('img/luggage.png');
  suit = loadImage('img/suit.png');
}
  
function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  colorMode(HSL);
  textAlign(CENTER);

}

function draw() {
  background(0,0,0);
  
  circle(xPosition, height/2, width/3);
  
  xPosition= xPosition + speed;
  
  if(xPosition > width){
    speed = -10;
    wasMovingLeft = true;
  }
  
  if(xPosition < 0){
    speed = 10;
    wasMovingLeft = false;
  }
  
  if(mouseIsPressed){
    speed = 0;
  }
  else{}
  
  image(clothes, width/11.5,height/2.7);
  image(luggage, width/2.3,height/2.9);
  image(suit, width/1.4,height/2.7);
  
  textSize(height/20);
  text('leisurewear', width/5, height/1.6);
  text('matching luggage', width/2,height/1.6);
  text('three piece suit', width/1.2,height/1.6);
  
  textSize(height/35);
  textLeading(height/40);
  text('on hire purchase in a \nrange of fucking \nfabrics', width/1.2, height/1.5);


  
}

  


function mouseReleased(){
  if (wasMovingLeft){
    speed=-10;
  } else{
    speed = 10;
  }
}