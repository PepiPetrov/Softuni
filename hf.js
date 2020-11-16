function time(h,m){
    h=Number(h)
    m=Number(m)
    m+=15;
    if(m>59){
        h+=Math.floor(m/60)
        m=m%60;
        
    }
    if(m<10){
        console.log(`${h}:0${m}`);
    }else{
        console.log(`${h}:${m}`);
        
    }
}
time('13','445')