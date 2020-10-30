const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;
var bird1;

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(720, 320, 70, 70);
    box2 = new Box(920, 320, 70, 70);
    box3 = new Box(720, 240, 70, 70);
    box4 = new Box(920, 240, 70, 70);
    box5 = new Box(820, 180, 70, 70);
    ground = new Ground(600, height, 1200, 20);
    pig1 = new Pig(820, 280);
    pig2 = new Pig(820, 230);
    log1 = new Log(820, 260, 275, PI / 2);
    log2 = new Log(820, 200, 275, PI / 2);
    log3 = new Log(770, 180, 160, PI / 4);
    log4 = new Log(870, 180, 160, -PI / 4);
    bird1 = new Bird(100, 100);
}

function draw() {
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
}