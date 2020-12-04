const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,Matter;



function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
    world = engine.world;

  var particles = [];
  var plinkos = [];
  var divisions = [];

  ground1 = new Ground(10,200,30,40);

}



function draw() {
  background(255,255,255);  
  var divisionHeight = 300;
  ground1.dislay();
  drawSprites();
}

for(var k =0 ; k<=Width ; k = k+80){
  divisions.push(new Divisions(k , height-divisionHeight/s , 10 ,divisionHeight));

}
for(var j = 40; j<=width; j=j+50){
  plinkos.push(new Plinko(j,75));
}
for(var j = 15; j<=width - 10; j=j+50){
  plinkos.push(new Plinko(j,175));
}
if(frameCount%60===0) {
  particles.push(new Particle(random(width/2-10),10,10));
}

for(var j = 0;j<particles.length;j++){
  particles[j].display();
}

for(var k = 0;k<divisions.length;k++){
  divisions[k].display();
}
