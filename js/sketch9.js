var font;
var rotation = 0.15
var mappedBackgroundColor;

function preload(){
  font = loadFont('sofiasans.ttf');
}

function rotateText(x, y, radius, txt, rotation) {

    // Split the chars so they can be printed one by one
    chars = txt.split("")

    // Decide an angle
    charSpacingAngleDeg = 5;

    // https://p5js.org/reference/#/p5/textAlign
    textAlign(CENTER, BASELINE);
    textSize(height/30);
    fill(41,97,64);

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
 mappedBackgroundColor = map(mouseY, height/4,height, 100,64);
  background(41,97,mappedBackgroundColor);
  
  noStroke();
  circle(width/2, mouseY, height/10);
  
  rotation = map(mouseY,height,0,0.1,0.2);
  print(rotation)
  textToRotate = "S u n d a y  m o r n i n g"
  rotateText(width/2, mouseY, width/20, textToRotate, rotation)
   
 
  
  
}
