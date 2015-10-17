var Momobj=function()
{
    this.x;
    this.y;
    //this.bigeye=new Image();
    this.bigbody=new Image();
    //this.bigTail=new Image();
    this.bigTailtimer=0;
    this.bigTailcount=0;
    this.bigEyetimer=0;
    this.bigEyecount=0;
    this.bigEyeInterval=2000;
    this.bigbodycount=0;
    this.angle;
}
Momobj.prototype.init=function()
{
    this.x=canwidth*0.5;
    this.y=canheight*0.5;
    //this.bigeye.src="../Res/bigEye0.png";
    this.bigbody.src="../Res/bigSwim0.png";
    //this.bigTail.src="../Res/bigTail0.png";
    this.angle=0;
    
}
Momobj.prototype.draw=function()
{
    //lerp x,y
    this.x=lerpDistance(mx,this.x,0.993);
    this.y=lerpDistance(my,this.y,0.993);
    
    //delta angle
    var deltaY=my-this.y;
    var deltaX=mx-this.x;
    var beta=Math.atan2(deltaY,deltaX)+Math.PI;
    
    //lerp angle
    this.angle=lerpAngle(beta,this.angle,0.9);
    //mom count time
    this.bigTailtimer+=deltaTime;
    this.bigEyetimer+=deltaTime;
    if(this.bigTailtimer>50)
    {
        this.bigTailcount=(this.bigTailcount+1)%8;
        this.bigTailtimer%=50;
    }
    if(this.bigEyetimer>this.bigEyeInterval)
    {
        this.bigEyecount=(this.bigEyecount+1)%2;     
        if(this.bigEyecount==0)
            this.bigEyeInterval=Math.random()*1500+2000;
        else
            this.bigEyeInterval=200;
        this.bigEyetimer%=this.bigEyeInterval;
    }
    ctx1.save();
    var bigTailCount=this.bigTailcount;
    var bigEyeCount=this.bigEyecount;
    var bigBodyCount=this.bigbodycount;    
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(tail[bigTailCount],-tail[bigTailCount].width*0.5+30,-tail[bigTailCount].height*0.5); 
    if(data.blue==1)
    {
         ctx1.drawImage(bigbodyorange[bigBodyCount],-bigbodyorange[bigBodyCount].width*0.5,-bigbodyorange[bigBodyCount].height*0.5);
    }
    else
    {
      ctx1.drawImage(bigbodyblue[bigBodyCount],-bigbodyblue[bigBodyCount].width*0.5,-bigbodyblue[bigBodyCount].height*0.5);  
    }   
    ctx1.drawImage(bigeye[bigEyeCount],-bigeye[bigEyeCount].width*0.5,-bigeye[bigEyeCount].height*0.5);
    ctx1.restore();
}