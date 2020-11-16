function math([n,a]){
    Boolean=true;
    console.log(Math.trunc(a));
    console.log(Math.max(a,n));
    console.log(Math.min(a,n));
    console.log(Math.ceil(a));
    console.log(a.toFixed(2));
    console.log(`${n} ${a}`);
    console.log(a>100);
    console.log(a>=n);
    console.log(n==a*1.25);
    console.log('5'===5);
    if(a>n)
    {
        Boolean=true;
        console.log(Boolean);
    }
    else
    {
        Boolean=false;
        console.log(Boolean);
    }
}

math([4,5])

