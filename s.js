function godzilaVSKong(bud,stat,obstat){
    bud=Number(bud);
    stat=Number(stat)
    obstat=Number(obstat)
    let totalStat=stat*obstat;
    let dekors=0.1*bud;
    let sum=0;
    let diff=0;
    if(stat>150){
        totalStat=0.9*totalStat
    }
    sum=totalStat+dekors;
    diff=Math.abs(bud-sum);
    if(bud>=sum){
        console.log('Action!');
        console.log(`Wingard starts filming with ${diff} leva left.`); 
   }
   else if(sum>bud){
       console.log('Not enough money!')
       	console.log(`Wingard needs ${diff} leva more.`)
       
       
   }
}
