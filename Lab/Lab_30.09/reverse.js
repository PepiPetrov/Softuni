function reverse(n,arr){
    let hums=[]
    for(let i=0;i<n;i++){
       hums.push(arr[i])
    }
    let str=''
    for(let i=hums.length-1;i>=0;i--){
        str+=hums[i]+' '
    }
    console.log(str)
}

reverse(2,[3,4,5])