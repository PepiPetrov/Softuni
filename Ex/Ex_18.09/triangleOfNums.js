function pyramidOfNums(n){
    n=parseInt(n)
    for(let i=1;i<=n;i++){
       console.log((i+' ').repeat(i))
    }
        
}

pyramidOfNums(3)