
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob;
var stand;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bobObject1=new Bob(100,400);
  bobObject2=new Bob(200,400);
  bobObject3=new Bob(300,400);
  bobObject4=new Bob(400,400);
  bobObject5=new Bob(500,400);

  stand=createSprite(200,200,300,30);
  
	Engine.run(engine);
  
}


function draw() {
  background("violet");
  drawSprites();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

}



