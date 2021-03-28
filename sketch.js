var box1,box2;


function setup() {
  createCanvas(800,400);
  box1=createSprite(200,200,50,40);
  box1.shapeColor="purple";
  box2=createSprite(400,200,80,30);
  box2.shapeColor="purple";
}

function draw() {
  background(0,0,0);  
  console.log(box2.x-box1.x);
  box2.y=World.mouseY;
  box2.x=World.mouseX;
  if(box2.x-box1.x<box1.width/2+box2.width/2&&box1.x-box2.x<box1.width/2+box2.width/2&&
    box2.y-box1.y<box1.height/2+box2.height/2&&box1.y-box2.y<box1.height/2+box2.height/2){
    box1.shapeColor="orange";
    box2.shapeColor="orange";
  }else{
    box1.shapeColor="purple";
    box2.shapeColor="purple";
  }

  
  drawSprites();
}