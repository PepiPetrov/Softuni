function integerAndFloat(n1,n2,n3){
    let sum=n1+n2+n3
    let newsum=parseInt(sum)
    if(newsum===sum){
        console.log(`${sum} - Integer`)
    }else{
        console.log(`${sum} - Float`);
    }
}

integerAndFloat(9,100,1.1)