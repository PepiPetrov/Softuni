function lastK(n,k){
    let result=[1]
    for(let i=1;i<n;i++){
        let lastK=result.slice(-k)
        let sum=0
        for (const iterator of lastK) {
            sum+=iterator
        }
        result.push(sum)
    }
    console.log(result.join(' '))
}

lastK(2,22)