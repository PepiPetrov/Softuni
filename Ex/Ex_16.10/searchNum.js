function searchNum(arr,arr1){
    arr=arr.slice(0,arr1[0])
    for(let i=0;i<arr1[1];i++){
        arr.shift()
    }
    let times=0
    let searxhed=arr1[2]
    for(let i=0;i<arr.length;i++){
        let cur=arr[i]
        if(cur===searxhed){
            times++
        }
    }
    console.log(`Number ${searxhed} occurs ${times} times.`)
}

searchNum([1, 2, 14,4],
    [4, 0, 1]
    )