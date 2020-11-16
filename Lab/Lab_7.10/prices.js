function prices(typeOfFood,count){
    let coffee=(b)=>console.log((1.5*b).toFixed(2))
    let water=(b)=>console.log((1*b).toFixed(2))
    let coke=(b)=>console.log((1.4*b).toFixed(2))
    let snacks=(b)=>console.log((2*b).toFixed(2))
    switch(typeOfFood){
       case 'coffee':coffee(count);break
       case 'coke':coke(count);break
       case 'water':water(count);break
       case 'snacks':snacks(count);break
    }
}