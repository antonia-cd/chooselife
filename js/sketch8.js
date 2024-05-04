var font;
var DkeyWasPressed = false;
var IkeyWasPressed = false;
var YkeyWasPressed = false;
var WkeyWasPressed = false;
var OkeyWasPressed = false;
var NkeyWasPressed = false;
var EkeyWasPressed = false;
var RkeyWasPressed = false;
var GkeyWasPressed = false;
var HkeyWasPressed = false;
var UkeyWasPressed = false;
var AkeyWasPressed = false;


function preload(){
  font = loadFont('sofiasans.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  colorMode(HSL);
}

function draw() {
  background(28,100,50);
  
  fill(0,0,100);
  textSize(height/10);
  text('CHOOSE  _  _  _', width/6, height/3);
  
  textSize(height/20);
  text('and  _  _  _  _  _  _  _  _  _    _  _  _', width/4, height/2);
  text('_  _  _    _  _  _     _  _    _', width/2, height/1.7);
  
  fill(41,97,64);
  if (DkeyWasPressed) {
    textSize(height/10);
    text('D',width/2.85,height/3);
    textSize(height/20);
    text('d',width/2.8,height/2);
  }
  
  if (IkeyWasPressed){
    textSize(height/10);
    text('I',width/2.52,height/3);
    textSize(height/20);
    text('i',width/2.36,height/2);
  }
  
  if(YkeyWasPressed){
    textSize(height/10);
    text('Y',width/2.31,height/3);
    textSize(height/20);
    text('y',width/2,height/1.7);
  }
  
  if(WkeyWasPressed){
    textSize(height/20);
    text('w',width/3.4,height/2);
    text('w',width/2.05,height/2);
  }
  
  if(OkeyWasPressed){
    textSize(height/20);
    text('o',width/3.17,height/2);
    text('o',width/1.89,height/2);
    text('o',width/1.92,height/1.7);
    text('o',width/1.55,height/1.7);
  }
  
  if(NkeyWasPressed){
    textSize(height/20);
    text('n',width/2.97,height/2);
    text('n',width/2.28,height/2);
    text('n',width/1.5,height/1.7);
  }
  
  if(EkeyWasPressed){
    text('e',width/2.65,height/2);
    text('e',width/1.635,height/1.7);
  }
  
  if(RkeyWasPressed){
    text('r',width/2.5,height/2);
    text('r',width/1.68,height/1.7);
  }
  
  if(GkeyWasPressed){
    text('g',width/2.17,height/2);
  }
  
  if(HkeyWasPressed){
    text('h',width/1.96,height/2);
  }
  
  if(UkeyWasPressed){
    text('u',width/1.85,height/1.7);
  }
  
  if(AkeyWasPressed){
    text('a',width/1.75,height/1.7);
    text('a',width/1.44,height/1.7);
  }
}

function keyPressed(){
  fill(60,80,70);
  print(keyCode);
  if(keyCode == 68){
    DkeyWasPressed = true;
  }
  if(keyCode == 73){
    IkeyWasPressed = true;
  }
  if(keyCode == 89){
    YkeyWasPressed = true;
  }
  if(keyCode == 87){
    WkeyWasPressed = true;
  }
  if(keyCode == 79){
    OkeyWasPressed = true;
  }
  if(keyCode == 78){
    NkeyWasPressed = true;
  }
  if(keyCode == 69){
    EkeyWasPressed = true;
  }
  if(keyCode == 82){
    RkeyWasPressed = true;
  }
  if(keyCode == 71){
    GkeyWasPressed = true;
  }
  if(keyCode == 72){
    HkeyWasPressed = true;
  }
  if(keyCode == 85){
    UkeyWasPressed = true;
  }
  if(keyCode == 65){
    AkeyWasPressed = true;
  }
}