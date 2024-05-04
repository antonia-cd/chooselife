var font;
var canOpener;
var rotation = 0.15

function preload(){
  font = loadFont('sofiasans.ttf');
  canOpener = loadImage('img/canopener.png');
}

function rotateText(x, y, radius, txt, rotation) {

    // Split the chars so they can be printed one by one
    chars = txt.split("")

    // Decide an angle
    charSpacingAngleDeg = 5;

    // https://p5js.org/reference/#/p5/textAlign
    textAlign(CENTER, BASELINE);
    textSize(height/25);
    fill(28,100,50);

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
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  colorMode(HSL);
}

function draw() {
  background(0,0,0);
  
    rotation = map(mouseY,width,0,0.15,0.32);
  print(rotation)

    textToRotate = "and electrical tin openers,"
    rotateText(width/1.5, height/2.264, width/7, textToRotate, rotation)
   
  fill(0,0,0);
  rect(width/2, height/2.264, width/3, height/3);
  
  image(canOpener, width/3.4, height/3.5);
  
}
