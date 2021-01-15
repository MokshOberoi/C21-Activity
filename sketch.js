//Create variables
var movingRect, fixedRect , rect3 , rect4 , rect5 ;
function setup() {
  createCanvas(800,400);
  //Create sprite for fixed rectangle
  fixedRect = createSprite(200, 200, 50, 100);
  //Add colour to fixed rectangle
  fixedRect.shapeColor = "green";
  //Create sprite for moving rectangle
  movingRect = createSprite(700,200,50,50);
  //Add colour to moving rectangle
  movingRect.shapeColor = "green";
  rect3 = createSprite(700,300,50,50);
  //Add colour to moving rectangle
  rect3.shapeColor = "green";
  rect4 = createSprite(500,50,50,50);
  rect4.velocityY = 3 ;
  //Add colour to moving rectangle
  rect4.shapeColor = "green";
  rect5 = createSprite(500,350,50,50);
  rect5.velocityY = -3 ;
  //Add colour to moving rectangle
  rect5.shapeColor = "green";


}

function draw() {
  background("blue");  
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if ( isTouching (movingRect,fixedRect)){
      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
  }  else {
           movingRect.shapeColor = "green";
           fixedRect.shapeColor = "green";
  }
/*
  if ( isTouching (movingRect,rect3)){
    movingRect.shapeColor = "yellow";
    rect3.shapeColor = "yellow";
  } else {
         movingRect.shapeColor = "green";
         rect3.shapeColor = "green";
  }
*/
  bounce(rect4,rect5);


  drawSprites();
}

