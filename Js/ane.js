var aneobject=function()
{
    //start point control point end point
    
    this.len=[];
    this.rootx=[];
    this.headx=[];
    this.heady=[];
    this.alpha=0;
    this.amp=[];
    
}
aneobject.prototype.num=50;
aneobject.prototype.init=function()
{
   
    for(var i=0;i<this.num;i++)
    {
        
        this.rootx[i]=i*16+Math.random()*20;
        this.headx[i]=this.rootx[i];
        this.heady[i]=canheight-250+Math.random()*50;
        this.amp[i]=Math.random()*50+50;
        
    }  
    
    
}
aneobject.prototype.draw=function()
{
    this.alpha+=deltaTime*0.0008;
    var l=Math.sin(this.alpha);
    ctx2.save();
    ctx2.globalAlpha=0.8;
    ctx2.lineWidth=14;
    ctx2.lineCap="round";
    ctx2.strokeStyle="#3b154e";
    for(var j=0;j<this.num;j++)
    {
        //beginpath moveto lineto stroke strokestyle linewidth lineCap globalAlpha
        ctx2.beginPath();
        ctx2.moveTo(this.rootx[j],canheight);
        this.headx[j]=this.rootx[j]+l*this.amp[j];
        ctx2.quadraticCurveTo(this.rootx[j],canheight-100,this.headx[j],this.heady[j]);
        ctx2.stroke();
    }
    ctx2.restore();
}