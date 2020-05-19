class Log
 {
    constructor(x,y,width,height) {
      //this.x=200;
      //this.y=100;
    
      // var options = {
      //     'restitution':0.8,
      //     'friction':2,
      //     'density':1.0
      // }
      this.body = Bodies.rectangle(x,y,width,height);
      this.x=x;
      this.y=y;
      this.width = width;
      this.height = height;
      //Matter.Body.setAngle(this.body,angle)
      World.add(world, this.body);
    }
     
        
    display(){
      
       var pos =this.body.position;
      // var angle = this.body.angle;
      // push();
      // translate(pos.x, pos.y);
      // rotate(angle);
      // rectMode(CENTER);
      // strokeWeight(3);
      // stroke("blue");
      push();
      if(keyCode===UP_ARROW){
        this.body.speed.y=-5
      }
      if(keyCode===DOWN_ARROW){
        this.body.speed.y=5
      }
      if(keyCode===RIGHT_ARROW){
        this.body.speed.x=5
      }
      if(keyCode===LEFT_ARROW){
        this.body.speed.x=-5
      }
       fill(255);
      rect(pos.x,pos.y, this.width, this.height);
      pop();
    }
  }



  
  