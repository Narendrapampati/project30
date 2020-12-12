const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var poly, ground, stand1, stand2, polygon, engine, world;
var totalAttempts = 0;

function preload(){

  polygon = loadImage("hexagon (1).png");

}

function setup() {
  
  createCanvas(1200,600);
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();

  stand1 = new Ground (490,350,250,10);
  stand2 = new Ground (800,200,200,10);
 
  
  block1 = new Box(400,275,30,40);
  block2 = new Box(430,275,30,40);
  block3 = new Box(460,275,30,40);
  block4 = new Box(490,275,30,40);
  block5 = new Box(520,275,30,40);
  block6 = new Box(550,275,30,40);
  block7 = new Box(580,275,30,40);
  block8 = new Box (430,235,30,40);
  block9 = new Box(460,235,30,40);
  block10 = new Box(490,235,30,40);
  block11 = new Box(520,235,30,40);
  block12 = new Box(550,235,30,40);
  block13 = new Box(460,195,30,40);
  block14 = new Box(490,195,30,40);
  block15 = new Box(520,195,30,40);
  block16 = new Box(490,155,30,40);

  blocks1 = new Box(740,175,30,40);
  blocks2 = new Box(770,175,30,40);
  blocks3 = new Box(800,175,30,40);
  blocks4 = new Box(830,175,30,40);
  blocks5 = new Box(860,175,30,40);
  blocks6 = new Box(770,135,30,40);
  blocks7 = new Box(800,135,30,40);
  blocks8 = new Box(830,135,30,40);
  blocks9 = new Box(800,95,30,40);

  poly = Bodies.circle(50,400,20 ,{density:2});
  World.add(world, poly);

  slingShot = new Chain(this.poly, {x:150, y:250})


}

function draw() {
  background("cyan");  
  textSize(20);
  fill("red");
  text("Try to complete the game in 2 chances 😄 || Press space to get 1 more chance",100,500);


  textSize(20);
  fill("brown");
  text ("Total Attempts :"+ totalAttempts,50,50);

  textSize(30);
  stroke ("black");
  fill ("red");
  text ("A game by Narendra 😎",300,60);

  ground.display();

  stand1.display();
  stand2.display();

  slingShot.display();

  strokeWeight(0);
  stroke(0);
  fill("black");
  block1.display();
  fill("gold");
  block2.display();
  fill("black");
  block3.display();
  fill("gold");
  block4.display();
  fill("black");
  block5.display();
  fill("gold");
  block6.display();
  fill("black");
  block7.display();
  // stage 2
  fill("black");
  block8.display();
  fill("gold");
  block9.display();
  fill("black");
  block10.display();
  fill("gold");
  block11.display();
  fill("black");
  block12.display();
  // stage 3
  fill("black");
  block13.display();
  fill("gold");
  block14.display();
  fill("black");
  block15.display();
  // stage 4
  fill("black");
  block16.display();

   // stand2 
  // stage 1
  fill("black");
  blocks1.display();
  fill("gold");
  blocks2.display();
  fill("black")
  blocks3.display();
  fill("gold")
  blocks4.display();
  fill("black")
  blocks5.display();
  // stage2
  fill("black");
  blocks6.display();
  fill("gold")
  blocks7.display();
  fill("black")
  blocks8.display();

  fill("black")
  blocks9.display();

  

   imageMode(CENTER);
  image(polygon ,poly.position.x, poly.position.y,40,40);


  //if (block1 || block2 || block3 || block4 || block5 ||
  //  block11 || block12 || block13 || block14 || block15 || 
   // block16 || blocks1 || blocks2 || blocks3 ||
   // blocks4 || blocks5 || blocks6 || blocks7 ||
 //   blocks8 || blocks9.speed>5.4){
  //    textSize(45);
  //   text ("You win");
   // }

  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(poly,{x:mouseX,y:mouseY});
}

function mouseReleased() {
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32)
  Matter.Body.setPosition(poly, {x:150, y:400});
  slingShot.attach(poly);
  totalAttempts = totalAttempts+1;
}
