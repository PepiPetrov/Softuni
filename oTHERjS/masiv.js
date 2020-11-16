
function  masiv(k,x,a)
{
    k=Number(k);
    x=Number(x);
    let br=0;
    for (let i=0;i<k;i++) {
        a[i]=Number(a[i]);
        if(a[i]==x)br++;
    }
 if(br>=1)
    {
        console.log("Yes")
    }
    else{
        console.log("No")
    }
}
masiv(5,5,[3,3,5,4,5])



