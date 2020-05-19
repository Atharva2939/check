class box {
  constructor() {
    this.x = random(3,400);
    this.y = random(0,400);
  }
    // var options = {
    //     'restitution':0.8,
    //     'friction':2,
    //     'density':1.0
    //         }

    update(){
      this.y = this.y+5;

    if(this.y>400){
        this.y= random(0,100);
        this.x = random(3,400)
    }      
      this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }

  show(){
    // var pos =this.body.position;
    // var angle = this.body.angle;
    // push();
    // translate(pos.x, pos.y);
    // rotate(angle);
    // rectMode(CENTER);
    // strokeWeight(3);
    // stroke("blue");
    // fill(255);
    // rect(0, 0, this.width, this.height);
push()
fill("blue");
rect(this.x,this.y,30,30);
    pop();
  }
};
