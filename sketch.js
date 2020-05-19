const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1=[];
var pig1;
var log1;
var bird1;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    // box1 = new Box(700,320,70,70);
    // box2 = new Box(920,320,70,70);
    // ground = new Ground(600,height,1200,20)
    // pig1 = new Pig(810,350)
    // log1 = new Log(810,260,300,PI/2)
    // box3=new Box(700,240,70,70)
    // box4= new Box(920,240,70,70)
    // pig2= new Pig(810,220)
    // log2 = new Log(810,180,300,PI/2);
    // box5 = new Box(810,160,70,70);
    // log3 = new Log(760,120,150,PI/7)
    // log4 = new Log(870,120,150,-PI/7)
    // bird1= new Bird(200,200)
log1 = new Log(200,200,20,100)
    for (var i=0; i<1000; i++){
        // arrays formed which is storing new objects formed of drop class
            box1.push(new box());
}
}
function draw(){
    background(0);
    Engine.update(engine);
    bounceoff(log1,box1);
    log1.display();
    for (var i=0; i<1000; i++){
        box1[i].show();
        box1[i].update();
        }
}
function bounceoff(obj1,obj2){
    if (obj1.x -obj2.x < obj2.width/2 + obj1.width/2
      && obj2.x - obj1.x < obj2.width/2 + obj1.width/2) {
        obj1.velocityX = obj1.velocityX * (-1);
        }
    }
