var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12;
var ding;
var dong1,dong2,dong3,dong4;
var count;
function setup() {
  createCanvas(400,400);
   wall1 = createSprite(190,120,250,3);
   wall2 = createSprite(190,260,250,3);
   wall3 = createSprite(67,145,3,50);
   wall4 = createSprite(67,235,3,50);
   wall5 = createSprite(313,145,3,50);
   wall6 = createSprite(313,235,3,50);
   wall7 = createSprite(41,170,50,3);
   wall8 = createSprite(41,210,50,3);
   wall9 = createSprite(337,210,50,3);
   wall10 = createSprite(337,170,50,3);
   wall11 = createSprite(18,190,3,40);
  wall12 = createSprite(361,190,3,40);
  
    ding = createSprite(40,190,13,13);
  ding.shapeColor = "green";
  
   dong1 = createSprite(100,130,10,10);
  dong1.shapeColor = "red";
   dong2 = createSprite(215,130,10,10);
  dong2.shapeColor = "red";
   dong3 = createSprite(165,250,10,10);
  dong3.shapeColor = "red";
   dong4 = createSprite(270,250,10,10);
  dong4.shapeColor = "red";
  
  //To count number of times ding collides with dongs
  count = 0;
  
  
  
  //Give velocity to Sprites Ding & Dongs
  dong1.velocityY=8;
  dong2.velocityY=8;
  dong3.velocityY=-8;
  dong4.velocityY=-8;
  
  
  
  
}

function draw() {
  //playSound();
  
   background("white");
  text("Deaths: " + count,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(18,170,52,40);
  rect(308,170,52,40);
  drawSprites();
  
   
    //Make dongs bounce off with top edge & bottom edge
    dong1.bounceOff(wall1);
    dong1.bounceOff(wall2);
    dong2.bounceOff(wall1);
    dong2.bounceOff(wall2);
    dong3.bounceOff(wall1);
    dong3.bounceOff(wall2);
    dong4.bounceOff(wall1);
    dong4.bounceOff(wall2);
    
    
    
    
    
    //Condition to move Ding forward & backward
    if (keyDown(LEFT_ARROW)) {
      ding.x = ding.x-2;
    }
    if (keyDown(RIGHT_ARROW)) {
      ding.x = ding.x+2;
    }
    
    if (ding.isTouching(dong1)||ding.isTouching(dong2)|| ding.isTouching(dong3)|| ding.isTouching(dong4)) {
      ding.x = 40;
      ding.y = 190;
      count = count+1;
    }
    
    
    
    
    
    
    //Condition to check if ding collides with dongs
    ding.collide(wall11);
    ding.collide(wall12);
    
    
    //If tru reset the position of ding
    //Increase number of count
    
  

  }




