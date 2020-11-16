function record(recsec,dis,sec){
    recsec=Number(recsec)
    dis=Number(dis)
    sec=Number(sec)
    let z=12.5*Math.floor(dis/15)
    let tot=z+sec*dis;
    let dif=recsec-tot
    if(recsec>tot){
        console.log(`Yes, he succeeded! The new world record is ${Math.abs(dif).toFixed(2)} seconds.`); 
    }else if(tot>recsec){
        console.log(`No, he failed! He was ${Math.abs(dif.toFixed(2))} seconds slower.`); 
    }
}
record(55555.67,3017,5.03)