
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    console.log("The background colour is now blue.")
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
    console.log("The background colour is now yellow.")
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
    console.log("The background colour is now green.")
  }

  if(keyIsDown(RIGHT_ARROW))
  {
    background("red")
    console.log("The background colour is now red.")
  }
  
  drawSprites();
}