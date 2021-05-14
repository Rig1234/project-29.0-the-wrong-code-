class SlingShot {
    constructor(body1,point) {
        var options = {
            length : 10,
            stiffness : 0.3,
            bodyA : body1,
            pointB : point 
        }
        this.pointB = point;
         this.SlingShot =Matter.Constraint.create(options);
         World.add(world,this.SlingShot);
         this.SlingShot = loadImage('polygon.png');



  
    } 
    fly(){
        this.slingShot.bodyA = null;
    }

    display(){
        if(this.SlingShot.bodyA ){
    var pos1 = this.SlingShot.bodyA.position;
    var pos2 = this.pointB;
    //push()
    //strokeWeight(5);
    //stroke("grey");
    //l/ine(pos1.x,pos1.y,pos2.x,pos2.y);
    //pop()
    imageMode(CENTER);
    image(slingShot,slingShot.position.x,slingShot.position.y,40,50);
        }
    }

 
fly(){
    this.SlingShot.bodyA = null ;
} 
}

