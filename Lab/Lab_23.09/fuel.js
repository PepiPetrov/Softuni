function fuel(distance,passengers,diesel1liter){
    let neededfuel=(distance/100)*7
    neededfuel+=passengers*0.1
    let total=neededfuel*diesel1liter
    console.log(`Needed money for that trip is ${total}lv.`)
}

fuel(260, 9, 2.49)