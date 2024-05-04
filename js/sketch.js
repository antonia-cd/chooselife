var train;
var font;

function preload(){
  train = loadImage ('img/train.png');
  font = loadFont('sofiasans.ttf');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(height/20);
  textFont(font);
}

function draw() {
  background(0);
  
  //mappedmouseX = map(mouseX, 0, width/2.8, width,0)
  
  if (mouseX > width/2.2){
    image(train, width/2.2,height/2.5);
  } else {
      image(train, mouseX, height/2.5);
  }
  
  text('choose life.', width/1.15, height/1.8181818);
}