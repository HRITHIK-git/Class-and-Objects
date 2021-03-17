const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground1;

function setup() {
    var canvas = createCanvas(800, 400);
    engine = Engine.create();
    world = engine.world;


    box1 = new Box(200, 300, 50, 50);
    box2 = new Box(240, 100, 50, 100);
    ground1 = new Ground(400, 380, width, 20)

}

function draw() {
    background(0);
    Engine.update(engine);
    box2.display();
    box1.display();
    ground1.show();
}