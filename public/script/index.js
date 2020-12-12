function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
}
const color = (i) => noise(i, float(frameCount) / 255) * 255;
function draw() {
  noFill();
  beginShape();
  for (let i = 0; i < width; i++) {
    let m = noise(0.01 * i, float(frameCount) / 500) * windowHeight;
    let r = color(i),
      g = color(i),
      b = color(i);
    stroke(r, 0, 0, 25);
    curveVertex(i, m);
  }
  endShape();
  beginShape();
  for (let i = 0; i < width; i++) {
    let m = noise(0.01 * i, float(frameCount) / 700) * windowHeight;
    let r = color(i);
    stroke(0, 0, r, 25);
    curveVertex(i, m);
  }
  endShape();
  beginShape();
  for (let i = 0; i < width; i++) {
    let m = noise(0.01 * i, float(frameCount) / 900) * windowHeight;

    stroke(0);
    curveVertex(i, m);
  }
  endShape();
}
