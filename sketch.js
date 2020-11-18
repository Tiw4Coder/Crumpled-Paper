
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,650,30)
	ground = new Ground(400,680,800,20)
	bin1 = new Bin(400,620,200,30)
	bin2 = new Bin(350,580,30,50)
	bin3 = new Bin(450,580,30,50)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  
}

function keyPressed() {
	if(keyCode ===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}
