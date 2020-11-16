function stars(n,znak){
    for (let i=1;i<=n;i++){
        let zn=""
        for(let j=1;j<=n;j++){
        zn+=znak+" "
        }
        console.log(zn);
        
    }
 }
 stars(10-8,"K")