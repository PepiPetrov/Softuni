function max(a){
    let result=[]
    for(let i=0;i<a.length;i++){
        let isBigger=true
        for(let j=i+1;j<a.length;j++){
            if(a[i]<=a[j]){
                isBigger=false
                break
            }
        }
        if(isBigger){
            result.push(a[i])
        }
    }
    console.log(result.join(' '))
}

max([1, 4, 3, 2])