
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
var ground = new Ground(200,height,400,20);
var paper = new Paper(100,350,20,20);
var dustbin = new Dustbin(300,350,50,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  dustbin.display();
  drawSprites();
 
}

function keyPressed(){
	if(KeyCode===UP_ARROW){
		Matter.body.applyforce(paper.body,paper.body.position,{x:85,y:85})
	}
}

