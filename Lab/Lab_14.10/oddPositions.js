function odd(arr){
    let filtered=arr.filter((v,i)=>i%2===1)
    let doubled=filtered.map(x=>x*2).reverse().join(' ')
    console.log(doubled)
}

odd([10,15,30,25])