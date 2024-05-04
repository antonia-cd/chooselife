var font;
var tv;
var remote;
var big;
var remoteState = 0;
var big2;

function preload(){
  font = loadFont('sofiasans.ttf');
  tv = loadImage('img/tv.png');
  remote = loadImage('img/remote.png');
  big = loadImage('img/big.png');
  big2 = loadImage('img/big2.png');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  colorMode(HSL);
}

function draw() {
  background(28,100,50);
  
  textSize(height/20);
  text('choose a', width/2.2, height/6);
  
  image(tv, width/5.5, height/3.4);
  image(remote, width/1.15, height/1.6);
  
  if (remoteState == 1){
    image(big,width/5,height/3);
  } else if (remoteState == 2){
    image(big2,width/5,height/3);
  }

}

function mousePressed(){
  
  if(mouseX > width/1.15 && mouseX < width/1.08 && mouseY > height/1.6 && mouseY < height/1.3){
    remoteState += 1;
  if (remoteState == 3){
    remoteState = 0;
  }
  }
  
 
}