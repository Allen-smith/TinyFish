var dataobj=function()
{
    this.friutenum=0;
    this.blue=1; 
    this.scores=0;
}
dataobj.prototype.draw=function()
{
    var w=can1.width;
    var h=can1.height;
    //ctx1.fillText("Num "+this.friutenum,w*0.5,h-50);
    //ctx1.fillText("Double "+this.blue,w*0.5,h-80);
    ctx1.fillText("Scores "+this.scores,w*0.5,h-80);
    if(baby.babybodycount==19)
    {
       ctx1.fillText("Game Over!!",w*0.5,h*0.5);
       can1.removeEventListener('mousemove',onmousemove,false);
    }
}
dataobj.prototype.addscores=function()
{
    this.scores+=this.friutenum*100*this.blue;
    this.friutenum=0;
    this.blue=1;
}
