const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbin,ground;

function setup() {
  createCanvas(800, 700);
  
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper = new Paper(50,500,70);
  
  dustbin = new Dustbin(680,440,200,200);
    
  ground = new Ground(400,550,800,20);

  Engine.run(engine);  
}


function draw() {
  imageMode(CENTER);
  background(0);
  
  keyPressed();
  
  paper.display();

  dustbin.display();
  
  ground.display();

  drawSprites();
 
}

function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-200});
  }
}

