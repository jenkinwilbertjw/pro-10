var ship, shipImg, edges;
var seaImg;

function preload(){
shipImg = loadAnimation("ship-1.png" , "ship-2.png" , "ship-3.png" , "ship-4.png");
seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(900,500);
  sea = createSprite(200,180,400,20);
  sea.addImage("sea", seaImg);
  sea.x = sea.width/2; 
  ship = createSprite(470,250,20,50);
  ship.addAnimation("ship", shipImg);
  ship.scale = 0.5;
  edges = createEdgeSprites();
}

function draw() {
background("white");
sea.velocityX = -2;

if(sea.x < 0)
sea.x = sea.width/2; 
drawSprites();
}


































