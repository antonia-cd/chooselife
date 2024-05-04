var font;
var washing;
var wheel;
var cd;
var rotation1 = .15;
var rotation2 = .15;
var rotation3 = .15;



function preload(){
  font = loadFont('sofiasans.ttf');
  washing = loadImage('img/washing.png');
  wheel = loadImage('img/wheel.png');
  cd = loadImage('img/cd.png')
}


function rotateText(x, y, radius, txt, rotation) {

    // Split the chars so they can be printed one by one
    chars = txt.split("")

    // Decide an angle
    charSpacingAngleDeg = 5;

    // https://p5js.org/reference/#/p5/textAlign
    textAlign(CENTER, BASELINE)
    textSize(height/35)
    fill('black')

    // https://p5js.org/reference/#/p5/push
    // Save the current translation matrix so it can be reset
    // before the end of the function
    push()

    // Let's first move to the center of the circle
    translate(x, y)

    // First rotate half back so that middle char will come in the center
    rotate(radians(-chars.length * charSpacingAngleDeg / rotation))

    for (let i = 0; i < chars.length; i++) {
        text(chars[i], 0, -radius)

        // Then keep rotating forward per character
        rotate(radians(charSpacingAngleDeg))
    }

    // Reset all translations we did since the last push() call
    // so anything we draw after this isn't affected
    pop()
}



function setup() {
  createCanvas(1400, 1000);
  textFont(font);
  colorMode(HSL);
}

function draw() {
  background(220);
  
  image(washing, width/8, height/4);
  image(wheel, width/2.5, height/3.5);
  image(cd, width/1.5, height/4);
  
  rotation1 = map(mouseX,0,width,0.12,0.158)
  print(rotation1)
  rotation2 = map(mouseX,0,width,0.1,1)
  rotation3 = map(mouseX,0,width,0.2,0.5)
  
    // if (keyIsPressed){
    //   rotation += .01;
    // }

    textToRotate = "c h o o s e  w a s h i n g  m a c h i n e s,"
    rotateText(width/4.5, height/2.264, width/18, textToRotate, rotation1)
  
  textToRotate = "c a r s,"
    rotateText(width/2.03, height/2.42, width/18, textToRotate, rotation2)
  
   textToRotate = "c o m p a c t  d i s k  p l a y e r s,"
    rotateText(width/1.27, height/2.36, width/12, textToRotate, rotation3)
}