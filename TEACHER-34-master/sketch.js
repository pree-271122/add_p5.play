const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let bombImg,coinImg,happyImg,sadImg,stoneImg,walkingImg,backgroundImg;
var person,bomb,coin,stone;


function preload(){
  bombImg = loadImage("bomb.png");
  coinImg = loadImage("coin.png");
  happyImg = loadImage("happy.png");
  sadImg = loadImage("sad.png");
  stoneImg = loadImage("stone.png");
  walkingImg = loadImage("walking.png");
  backgroundImg = loadImage("nature.jpg");
}

function setup() {
  createCanvas(400,400);

  ground = new Ground(200,700,600,20);

  engine = Engine.create();
  world = engine.world;

 person = createSprite(200,200,20,20);
 person.addImage("walking",walkingImg);
 person.scale = 0.8;
 person.addImage("happy",happyImg);
 person.addImage("sad",sadImg);

 bomb = createSprite(200,300,20,20);
 bomb.addImage("bomb",bombImg);

 stone = createSprite(300,200,30,30);
 stone.addImage("stone",stoneImg);

 coin = createSprite(100,300,40,40);
 coin.addImage("coin",coinImg);
 coin.x = Math.round(random(10,300));
 coin.velocityX = 2;



  
}


function draw() 
{
  background(51);
  image(backgroundImg,400,400);

  ground.display();
  Engine.update(engine);
  
  drawSprites();
}


