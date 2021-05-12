class Rope{
    constructor(bodyA,pointB){
        var option={
            bodyA:bodyA,
            pointB:pointB,
            length:250,
            stiffness:1.2
        }
        this.pointB=pointB;
        this.rope = Constraint.create(option);
        World.add(world,this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(5);
        stroke("silver");
        line(pointB.x,pointB.y,pointA.x,pointA.y);
        pop();
    }
}