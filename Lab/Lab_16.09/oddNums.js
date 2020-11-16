function oddNums(n){
    n=parseInt(n)
    let counter=0
    let sum=0
    for(let i=1;i<=Number.POSITIVE_INFINITY;i+=2){
        if(counter==n){
            break
        }
        sum+=i
        console.log(i)
        counter++
    }
    console.log(`Sum: ${sum}`)
}

oddNums(5)