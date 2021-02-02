class Box
{
    constructor(x,y,width,height,color)
    {
        var box_options={
            restitution:0.3,
            friction:1,
            density: 0.001
           
        }
        this.body=Bodies.rectangle(x,y,width,height,box_options);
        this.width=width;
        this.height=height;
        this.color=color
        World.add(world,this.body);
    }

    display()
    {

        var pos=this.body.position;
        push();
        rectMode(CENTER)
          strokeWeight(3);
          fill(this.color)
        rect(pos.x,pos.y,this.width,this.height,this.color);
        pop();
    }
}