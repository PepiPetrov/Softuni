function perfect(n){
    let sum=1
    for(let i=2;i<=n/2;i++){
        if(n%i===0){
            sum+=i
        }
    }
    console.log(sum===n?'We have a perfect number!': "It's not so perfect.")
}

perfect(6)
perfect(28)