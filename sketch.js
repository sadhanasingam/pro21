
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground1;
var left;
var right;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(width/2, 670, width,20);
	left = new Ground(500,580,20,160);
	right = new Ground(700,580,20,160);





	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	} 
	//Create the Bodies Here.
	ball = Bodies.circle(200,200,30,ball_options)
	World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,20);
  ground1.display();
  left.display();
  right.display();

  Engine.update(engine);

  drawSprites();
 

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball,ball.position,{x:100,y:-140});
  
	}
}

