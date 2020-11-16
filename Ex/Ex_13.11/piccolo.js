function piccolo(arr){
    let parking={}
    for (let iterator of arr) {
        let [direction,car]=iterator.split(', ')
        if(direction==='IN'){
            parking[car]=1
        }else{
            delete parking[car]
        }
    }
    let sorted=Object.keys(parking).sort((a,b)=>a.localeCompare(b))
    if(sorted.length===0){
        console.log(`Parking Lot is Empty`)
    }else{
    console.log(sorted.join('\n'))
    }
}

piccolo(['IN, CA2844AA',
'OUT, CA2844AA']
)