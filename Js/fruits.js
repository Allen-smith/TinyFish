var fruitsobj=function()
{
    this.alive=[];
    this.x=[];
    this.y=[];
    this.l=[];
    this.anenu=[];
    this.spd=[];
    this.fruittype=[];
    this.orange=new Image();
    this.blue=new Image();
}
fruitsobj.prototype.num=10;
fruitsobj.prototype.init=function()
{
    for(var i=0;i<this.num;i++)
    {
        this.alive[i]=false;
        this.anenu[i]=0;
        this.x[i]=0;
        this.y[i]=0;
        this.l[i]=0;
        this.spd[i]=Math.random()*0.01+0.005;
        this.fruittype[i]="";
        //this.born(i);
    }
    this.orange.src="../Res/fruit.png";
    this.blue.src="../Res/blue.png";
}
fruitsobj.prototype.draw=function()
{
    for(var i=0;i<this.num;i++)
    {
        if(this.alive[i])
        {
           if(this.l[i]<14)//grow 
           {
               this.x[i]=ane.headx[this.anenu[i]];
               this.y[i]=ane.heady[this.anenu[i]];
               this.l[i]+=this.spd[i]*deltaTime;
               
           }
            else
            {
                this.y[i]-=this.spd[i]*5*deltaTime;

            }
            var pic;
            if(this.fruittype[i]=="blue")
            {
                pic=this.blue;
            }
            else 
            {
                pic=this.orange; 
            }
            ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
            if(this.y[i]<10)      
            {
                this.alive[i]=false;                                
            }
        }
        
    }

}
fruitsobj.prototype.born=function(i)
{
    this.anenu[i]=Math.floor(Math.random()*ane.num);
    this.l[i]=0;
    this.alive[i]=true;
    var color=Math.random();
    if(color<0.15)
    {
        this.fruittype[i]="blue";
        
    }
    else
    {
        this.fruittype[i]="orange";
    }
    
}
fruitsobj.prototype.dead=function(i)
{
    this.alive[i]=false;
}
function fruitMonitor()
{
    var num=0;
    for(var i=0;i<fruit.num;i++)
    {
        if(fruit.alive[i])
            num++;
    }
    if(num<15)
    {
        sendFruit();
        return;
    }
}
function sendFruit()
{
    for(var i=0;i<fruit.num;i++)
    {
        if(!fruit.alive[i])
        {
            fruit.born(i);
            return;
        }
    }
}
