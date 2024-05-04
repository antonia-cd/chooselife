var font;
var mappedBackgroundColor;

function preload(){
  font = loadFont('sofiasans.ttf')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(height/20);
  textFont(font);
  colorMode(HSL);
}

function draw() {  
  mappedBackgroundColor = map(mouseX, 0,width, 50,100);
  background(28,100,mappedBackgroundColor);
  
  fill(0,0,100);

  text('choose a',width/3.5,height/2.5);
  text('choose a',width/3.5,height/2);
  text('choose a',width/3.5,height/1.666);
  
  fill(28,100,50)
  
  text('JOB.',width/1.55,height/2.5);
  text('CAREER.',width/1.6,height/2);
  text('FAMILY.',width/1.59,height/1.666);
  
}