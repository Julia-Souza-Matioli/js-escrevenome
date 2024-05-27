function setup() {
    createCanvas(500, 500);
    background("white");
  }
  
  function draw() {
    
  
    stroke("yellow");
    fill("purple");
  
    //console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 30, 30);
    }
  }
  