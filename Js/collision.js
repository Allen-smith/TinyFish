//mom fruite
function collison()
{
    for(var i=0;i<fruit.num;i++)
    {
        if(fruit.alive[i])
        {
            var l=calLength2(fruit.x[i],fruit.y[i],Mom.x,Mom.y);
            if(l<900)
            {
                //fruit eaten
                fruit.dead(i);
                data.friutenum++;
                Mom.bigbodycount++;
                if(Mom.bigbodycount>7)
                {
                    Mom.bigbodycount=7;
                }
                if(fruit.fruittype[i]=="blue")
                {
                    data.blue=2;
                    baby.babybodycount=0;
                }
            }
        }
    }
}
//mom baby collison
function MomBabycollison()
{
    var l=calLength2(baby.x,baby.y,Mom.x,Mom.y);
    if(l<900)
    {
        if(data.friutenum>0)
           baby.babybodycount=0;
        
        Mom.bigbodycount=0;
        //scores count
        data.addscores();
    }
}
