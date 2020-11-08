var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200,400,50,50);
  movingRect = createSprite(1100,400,30,80);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  fixedRect.velocityX = 3;
  movingRect.velocityX = -3;
}

function draw() {
  background(0); 
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY; 
  if(movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2 && fixedRect.x-movingRect.x < movingRect.width/2 + fixedRect.width/2 && movingRect.y-fixedRect.y < movingRect.height/2 + fixedRect.height/2 && fixedRect.y-movingRect.y < movingRect.height/2 + fixedRect.height/2) {
    //fixedRect.shapeColor = "red";
    //movingRect.shapeColor = "red";
    fixedRect.velocityX = (-1)*fixedRect.velocityX;
    movingRect.velocityX =(-1)*movingRect.velocityX;
  }
  //else {
    //fixedRect.shapeColor = "green";
    //movingRect.shapeColor = "green";
  //}
  drawSprites();
}