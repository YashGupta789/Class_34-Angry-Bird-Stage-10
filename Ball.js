class Ball{
    constructor(x,y,width,height){
        var option={
            frictionAir:0.005,
            density:1
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("white")
        ellipse(0,0,this.width,this.height);
        pop();
    }
}