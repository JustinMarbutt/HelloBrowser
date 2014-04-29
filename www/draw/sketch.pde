void setup() {
  size(600, 100);
  background(100);
  fill(255);
  noLoop();
  PFont fontA = loadFont("courier");
  textFont(fontA, 20);
}

void draw() {
  text("Hello, Processing.js", 210, 40);
  text("Drawn from pde file", 223, 65);
  fill(24, 12, 200);
  ellipse(76, 39, 45, 45);
  fill(204, 32, 10);
  triangle(10, 65, 38, 10, 66, 65);
  fill(34, 202, 10);
  quad(38, 30, 86, 30, 86, 75, 38, 75);
}