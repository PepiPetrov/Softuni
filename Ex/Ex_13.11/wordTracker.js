function wordTracker(arr){
    let map=new Map()
    let words=arr.shift().split(' ')
    for (const iterator of words) {
        map.set(iterator,0)
    }
    for (const iterator of arr) {
        if(map.has(iterator)){
            map.set(iterator,map.get(iterator)+1)
        }
    }
    let sorted=Array.from(map).sort((a,b)=>b[1]-a[1])
    for (const [name,count] of sorted) {
        console.log(`${name} - ${count}`)
    }
}

wordTracker([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ]
    )