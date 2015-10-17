var babyobj=function()
{
    this.x;
    this.y;
    //this.babyeye=new Image();
    this.babybody=new Image();
    //this.babytail=new Image();
    this.babyTailtimer=0;
    this.babyTailcount=0;
    this.babyEyetimer=0;
    this.babyEyecount=0;
    this.babyEyeInterval=2000;
    this.babybodytimer=0;
    this.babybodycount=0;
    this.angle;
}
babyobj.prototype.init=function()
{
    this.x=canwidth*0.5-50;
    this.y=canheight*0.5+50;
    this.angle=0;
    //this.babyeye.src="../Res/babyEye0.png";
    this.babybody.src="../Res/babyFade0.png";
    //this.babytail.src="../Res/babyTail0.png";
    
}
babyobj.prototype.draw=function()
{
    this.x=lerpDistance(Mom.x,this.x,0.99);
    this.y=lerpDistance(Mom.y,this.y,0.99);
    
    var bdeltaY=Mom.y-this.y;
    var bdeltaX=Mom.x-this.x;
    var bbeta=Math.atan2(bdeltaY,bdeltaX)+Math.PI;
    
    //lerp angle
    this.angle=lerpAngle(bbeta,this.angle,0.6);
    //count timer
    this.babyTailtimer+=deltaTime;
    this.babyEyetimer+=deltaTime;
    this.babybodytimer+=deltaTime;
    
    if(this.babyTailtimer>50)
    {
        this.babyTailcount=(this.babyTailcount+1)%8;
        this.babyTailtimer%=50;
    }
    if(this.babyEyetimer>this.babyEyeInterval)
    {
        this.babyEyecount=(this.babyEyecount+1)%2;
        if(this.babyEyecount==0)
            this.babyEyeInterval=Math.random()*1500+2000;
        else
            this.babyEyeInterval=200;
        this.babyEyetimer%=this.babyEyeInterval;
    }
    if(this.babybodytimer>300)
    {
        this.babybodycount=this.babybodycount+1;
        if(this.babybodycount>19)
            this.babybodycount=19;
        this.babybodytimer%=300;     
    }
    ctx1.save();
    var babyTailCount=this.babyTailcount;
    var babyEyeCount=this.babyEyecount;
    var babyBodyCount=this.babybodycount;
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(tail[babyTailCount],-tail[babyTailCount].width*0.5+23,-tail[babyTailCount].height*0.5); 
    ctx1.drawImage(babybody[babyBodyCount],-babybody[babyBodyCount].width*0.5,-babybody[babyBodyCount].height*0.5);
    ctx1.drawImage(babyeye[babyEyeCount],-babyeye[babyEyeCount].width*0.5,-babyeye[babyEyeCount].height*0.5);
    ctx1.restore();
}