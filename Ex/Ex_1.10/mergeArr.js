function mergeArr(a,b){
    let third=[]
    for(let i=0;i<a.length;i++){
        if(i%2===0){
            third.push(Number(a[i])+Number(b[i]))
        }else{
            third.push(a[i]+b[i])
        }
    }
    console.log(third.join(' - '))
}