
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
  createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = Bodies.rectangle(400, 100, 400, 20 , {isStatic:true} );
	World.add(world, roof);

  bob1= new Bob(100,300,30);
  bob2= new Bob(110,300,30);
  bob3= new Bob(120,300,30);
  bob4= new Bob(130,300,30);
  bob5= new Bob(140,300,30);

  var bobDiametre=10;

  rope1=new Rope(bob1.body,roof.body,-bobDiametre*2,0);
  rope2=new Rope(bob1.body,roof.body,-bobDiametre*4,2);
  rope3=new Rope(bob1.body,roof.body,-bobDiametre*6,4);
  rope4=new Rope(bob1.body,roof.body,-bobDiametre*8,6);
  rope5=new Rope(bob1.body,roof.body,-bobDiametre*10,8);

  Engine.run(engine);
	

	
   
}


function draw() {
  rectMode(CENTER);
  background("black");
  rect(roof.position.x,roof.position.y,400,20);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  

  drawSprites();
}




