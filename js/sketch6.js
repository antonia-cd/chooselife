var font;
var block;
var OnePressed = false;
var TwoPressed = false;
var ThreePressed = false;
var FourPressed = false;
var FivePressed = false;
var SixPressed = false;

function preload(){
  font = loadFont('sofiasans.ttf');
  block = loadImage('img/block.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  colorMode(HSL);
}

function draw() {
  background(28,100,50);
  
  fill(0,0,100);
  textSize(height/25);
  
  
  image(block, width/5, height/3.5);
  image(block, width/2.42, height/3.5);
  image(block, width/1.59, height/3.5);
  
  image(block, width/5, height/1.95);
  image(block, width/2.42, height/1.95);
  image(block, width/1.59, height/1.95);
  
  fill(0,0,0);


  if(OnePressed){
    textSize(height/25);
    fill(0,0,0);
    text('good health', width/4.4, height/2.6);
  } else{
    text('1', width/3.52, height/2.6);
  }
  
  if(TwoPressed){
    textSize(height/25);
    text('low', width/2.07, height/2.8);
    text('cholestorol', width/2.25, height/2.5);
  } else{
    text('2', width/2.01, height/2.6);
  }
  
  if(ThreePressed){
    textSize(height/25)
    text('dental', width/1.46, height/2.8);
    text('insurance', width/1.5, height/2.5);
  } else{
    text('3', width/1.41, height/2.6);
  }
  
  if(FourPressed){
    textSize(height/25);
    fill(0,0,0);
    text('fixed-interest', width/4.6, height/1.75);
    text('mortgage', width/4.2, height/1.63);
    text('payments', width/4.2, height/1.52);
  } else{
    text('4', width/3.52, height/1.63);
  }
  
  if(FivePressed){
    textSize(height/25);
    text('a starter', width/2.18, height/1.7);
    text('home', width/2.12, height/1.58);
  } else{
    text('5', width/2.01, height/1.63);
  }
  
  if(SixPressed){
    textSize(height/25);
    text('your friends', width/1.51, height/1.63);
  } else{
    text('6', width/1.41, height/1.63);
  }
  
  fill(0,0,100);
  textSize(height/20);
    text('choose', width/2.2, height/5);

}

function keyPressed(){
  fill(0,0,0);
  print(keyCode);
  if(keyCode == 49){
    OnePressed = true;
  }
  if(keyCode == 50){
    TwoPressed = true;
  }
  if(keyCode == 51){
    ThreePressed = true;
  }
  if(keyCode == 52){
    FourPressed = true;
  }
  if(keyCode == 53){
    FivePressed = true;
  }
  if(keyCode == 54){
    SixPressed = true
  }
}