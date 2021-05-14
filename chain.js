class Chain {
constructor(bodyA,pointB){
    var options = {
        bodyA: bird.body,
        pointB:pointB, 
        stiffness: 0.04,
        length: 10
    }  
this.chain = Constraint.create (options);
World.add(world,this.chain);
}
display(){
if(this.chain.bodyA!==null){
    var pointA = this.chain.bodyA.position;
var pointB = this.chain.pointB
line(pointA.x,pointA.y,pointB.x,pointB.y);
}
}



}

