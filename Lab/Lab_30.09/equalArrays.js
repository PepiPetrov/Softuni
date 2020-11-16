function equalArrays(a,b){
    let index=0
    let suma=0
    let sumb=0
    for(let i=0;i<a.length;i++){
        suma+=Number(a[i])
    }
    for(let i=0;i<b.length;i++){
        sumb+=Number(b[i])
    }
    let areEqual=true
    for(let i=0;i<a.length;i++){
        if(a[i]!==b[i]){
                console.log(`Arrays are not identical. Found difference at ${i} index`)
                areEqual=false
                break
        }
    }
    if(areEqual){
        console.log(`Arrays are identical. Sum: ${suma}`)
    }
}

equalArrays(['10','20','30'], ['10','20','30'])