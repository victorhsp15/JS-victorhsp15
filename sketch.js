function setup() {
    createCanvas(400, 400);
    background("white");
  }
  
  function draw() {
    stroke("red");
    fill("black");
  
    //console.log(mouseIsPressed);
  
    if (mouseIsPressed) circle(mouseX, mouseY, 15, 35);
  }
  