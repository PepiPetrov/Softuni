function nXnMatrix(a){
    a=parseInt(a)
    for(let i=0;i<a;i++){
        let line=''
        for(let i=0;i<a;i++){
            line+=a+' '
        }
        console.log(line)
    }
}

nXnMatrix(2)