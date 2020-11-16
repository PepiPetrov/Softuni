function carRace(leters,letersForFRonud,rounds)
{
     leters=Number(leters)
     letersForFRonud=Number(letersForFRonud)
     rounds=Number(rounds)
    leters-=letersForFRonud
    for (let i = 1; i <rounds; i++) {
           leters-=letersForFRonud-0.1
           if(0>=leters){
        console.log(`You are out of fuel in round ${i}!`);break; 
       }
    }
    
    if(leters>0){
        console.log("Congrats! You won the race!");    
    }
}


carRace(50,
    4.3,
    30)