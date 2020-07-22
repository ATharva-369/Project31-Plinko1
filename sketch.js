
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;
  ground1 = new ground(width / 2, 790, width, 20);
  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }
  for (var j = 40; j <= width; j = j + 50) {
    plinkos.push(new plinko(j, 75, 20));
  }
  for (var j = 15; j <= width - 10; j = j + 50) {
    plinkos.push(new plinko(j, 175, 20));
  }
}


function draw() {
  background("black");
  drawSprites();
  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10,width/2+10),10,10));
  };
  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }
  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  plinkos[1, 1].display()
  plinkos[1, 2].display()
  plinkos[1, 3].display()
  plinkos[1, 4].display()
  plinkos[1, 5].display()
  plinkos[1, 6].display()
  plinkos[1, 7].display()
  plinkos[1, 8].display()
  plinkos[1, 9].display()
  plinkos[1, 10].display()
  plinkos[1, 11].display()
  plinkos[1, 12].display()
  plinkos[1, 13].display()
  plinkos[1, 14].display()
  plinkos[1, 15].display()
  plinkos[1, 16].display()
  plinkos[1, 17].display()
  plinkos[1, 18].display()
  ground1.display();
  Engine.update(engine)
}