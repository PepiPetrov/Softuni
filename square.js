function square(n,znak){
    n=Number(n)
    let result=''
    for(let i=1;i<=n;i++){
        result=znak.repeat(n)
        console.log(result)
    }
}

square('*c ')