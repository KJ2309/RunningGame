var path;
var pathImage;
var player, playerAni;
function preload(){
  //pre-load images
  pathImage = loadImage("path.png")
  playerAni = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY = 4;
  path.scale = 1.2;
  
  player = createSprite(200,350);
  player.addAnimation("player",playerAni);
  player.scale = 0.075;
}

function draw() {
  background(0);
  if (path.y> 400){
    path.y = height/2;
  }
  player.x=World.mouseX;
  drawSprites();
}
