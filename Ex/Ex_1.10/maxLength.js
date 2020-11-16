function maxLength(arr){
    let sequwncelong=[]
    for(let i=0;i<arr.length;i++){
        let cur=[arr[i]]
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                cur.push(arr[j])
            }else{
                break
            }
        }
        if(sequwncelong.length<cur.length){
            sequwncelong=cur
        }
    }
    console.log(sequwncelong.join(' '))
}

maxLength([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])