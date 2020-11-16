function minerTask(arr){
    let map=new Map()
    for(let i=0;i<arr.length;i++){
        let name=arr[i]
        i++
        let quaintity=Number(arr[i])
        if(!map.has(name)){
            map.set(name,quaintity)
        }else{
            map.set(name,quaintity+map.get(name))
        }
    }
    for (const [name,quantity] of map) {
        console.log(`${name} -> ${quantity}`)
    }
}

minerTask([
    'Злато','1','Сребро','2','GoldAndSilver','090990909090903600'
])