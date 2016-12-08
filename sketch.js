var video;
var x = 0;

function setup() {
  createCanvas(800, 240);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(320, 240);
  background(50);
}


function draw() {

 video.loadPixels();
 //image(video, 0, 0);
  
  var w = video.width;
  var h = video.height;
  
  copy(video, w/2, 0, 1, h/2, x, 0, 1, h/2);
  
  x = x+1;
  if (x > width) {
    x = 0;
  }
  

}
