function binCount(num,search){
    let n=num
    let b,counter=0
    n=parseInt(n,2)
    let assTR=String(n).length
    for (let index = 0; index < assTR; index++) {
        let last=n&1
        if(last===search)counter++
    }
    console.log(counter)
}

binCount(20,0)//3