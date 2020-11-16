function nextLevel(arr){
    let needed=parseFloat(arr.shift())
    let countOfBATTLES=parseInt(arr.shift())
    let currernt=0
    for(let i=1;i<=countOfBATTLES;i++){
        let now=Number(arr.shift())
        if(i%3===0){
            now*=1.15
        }
        if(i%5==0){
            now*=0.9
        }
        if(i%15==0){
            now*=1.05
        }
        currernt+=now
        if(currernt>=needed){
            console.log(`Player successfully collected his needed experience for ${i} battles.`)
            return
        }
    }
    console.log(`Player was not able to collect the needed experience, ${(needed-currernt).toFixed(2)} more needed.`)
}

nextLevel([5000,
    6,
    50,
    100,
    200,
    100,
    20,
    4502])
    
    