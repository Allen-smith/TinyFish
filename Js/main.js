var can1;
var can2;

var ctx1;
var ctx2;

var lastTime;
var deltaTime;

var bgpic=new Image();

var canwidth;
var canheight;

var ane;
var fruit;
var Mom;
var baby;
var data;

var mx;
var my;
var tail=[];
var babyeye=[];
var bigeye=[];
var babybody=[];
var bigbodyorange=[];
var bigbodyblue=[];
document.body.onload=game;
function game()
{
    
    init();
    lastTime=Date.now();
    deltaTime=0;
    gameloop();
}
function init()
{
    can1=document.getElementById("canvas1");//fishes ui scores circle
    ctx1=can1.getContext('2d');
    
    can2=document.getElementById("canvas2");//background ane friuts
    ctx2=can1.getContext('2d');
    
    can1.addEventListener('mousemove',onmousemove,false);

    
    canwidth=can1.width;
    canheight=can1.height;
    
    bgpic.src="../Res/background.jpg";
    
    ane=new aneobject();
    
    ane.init();
    
    fruit=new fruitsobj();
    
    fruit.init();
    
    Mom=new Momobj();
    
    Mom.init();
    
    baby=new babyobj();
    baby.init();
    
    data=new dataobj();
    
    mx=canwidth*0.5;
    my=canheight*0.5;
    
    for(var i=0;i<8;i++)
    {
        tail[i]=new Image();
        tail[i].src="../Res/bigTail"+i+".png";      
    }
    for(var j=0;j<2;j++)
    {
        babyeye[j]=new Image();
        babyeye[j].src="../Res/babyEye"+j+".png";
    }
    for(var k=0;k<2;k++)
    {
        bigeye[k]=new Image();
        bigeye[k].src="../Res/bigEye"+k+".png";
    }
    for(var i=0;i<20;i++)
    {
        babybody[i]=new Image();
        babybody[i].src="../Res/babyFade"+i+".png";
    }
    for(var i=0;i<8;i++)
    {
        bigbodyorange[i]=new Image();
        bigbodyblue[i]=new Image();
        bigbodyorange[i].src="../Res/bigSwim"+i+".png";
        bigbodyblue[i].src="../Res/bigSwimBlue"+i+".png";
    }
    ctx1.fillStyle="white";
    ctx1.font="30px Verdana";
    ctx1.textAlign="center";
}
function gameloop()
{
    window.requestAnimFrame(gameloop);
    var Now=Date.now();
    deltaTime=Now-lastTime;
    lastTime=Now;
    if(deltaTime>40)
        deltaTime=40;
    drawBackground();
    ane.draw();  
    fruitMonitor();
    fruit.draw();
    //ctx1.clearRect(0,0,canwidth,canheight);
    Mom.draw();
    collison();
    baby.draw();
    MomBabycollison();
    data.draw();
    
}
function onmousemove(e)
{
    if(e.offSetX ||e.layerX)
    {
        mx=e.offSetX==undefined?e.layerX:e.offSetX;
        my=e.offSetY==undefined?e.layerY:e.offSetY;
    }
    
}