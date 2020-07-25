class Chain {
    constructor(object1,object2){
        var Options = {
          bodyA:object1,
          bodyB:object2,
          stiffness:0.04,
          length:10
        }
        this.chain = Constraint.create(Options)
        World.add(world,this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        push();
        strokeWeight(6)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop();
    }
}