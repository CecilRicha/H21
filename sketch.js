const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var ball_prpty
var button_1,button_2,button3

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ball_prpty = { restitution : 1}
  ball = Bodies.circle (200,150,20,ball_prpty)
  World.add (world,ball);

  button_1 = createImg ("push.png");
  button_1.position(300,30)
  button_1.size(50,50)
  button_1.mouseClicked(hforce)

  button_2 = createImg("push.png")
  button_2.position(20,30)  
  button_2.size(50,50)
  button_2.mouseClicked(vforce)

  button3 = createImg("push.png")
  button3.position(150,30)
  button3.size(50,50)
  button3.mouseClicked(Slantforce)
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);

  ellipse (ball.position.x,ball.position.y,20,20)
}

function hforce (){
  Matter.Body.applyForce (ball,{x:0,y:0},{x:0.05,y:0})
}
function vforce (){
  Matter.Body.applyForce (ball,{x:0,y:0},{x:0,y:-0.05})
}
function Slantforce (){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.05})
}
