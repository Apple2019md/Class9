var box;
function setup(){
  createCanvas(1200,500);
  box=createSprite(600,250,100,100);
  box.shapeColor=rgb(255,0,0);
}

function draw(){
  background(0,0,255);
  if(keyIsDown(RIGHT_ARROW)){
    box.x =box.x + 5;

  }
  if(keyIsDown(LEFT_ARROW)){
    box.x=box.x-5;
  }
  if(keyIsDown(UP_ARROW)){
    box.y=box.y-5;
  }
  if(keyIsDown(DOWN_ARROW)){
    box.y=box.y+5;
  }
  drawSprites();
}




