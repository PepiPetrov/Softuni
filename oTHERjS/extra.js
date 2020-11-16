function f([r])
{
    var r;
    console.log(r);
    do
    {

      r--;  
    console.log(r);
    }
    while(r!=0);
    if(r<0){
      do
      {
        r++;
        console.log(r);
      }
      while(r!=0);
    }
    console.log(" ");
}
f([-3])
