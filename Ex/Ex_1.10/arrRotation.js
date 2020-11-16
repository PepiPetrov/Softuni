function arrRotation(a,n){
    for(let i=0;i<n;i++){
        let el=a.shift()
        a.push(el)
    }
    console.log(a.join(' '))
}


arrRotation([1,2,3,4],4)