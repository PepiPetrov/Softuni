function storage(arr){
    let map=new Map()
    for (let iterator of arr) {
        let [product,quantity]=iterator.split(' ')
        quantity=Number(quantity)
        if(!map.has(product)){
            map.set(product,+quantity)
        }else{
            let old=map.get(product)
            let newed=old+quantity
            map.set(product,newed)
        }
    }
    for (const kvp of map) {
        console.log(`${kvp[0]} -> ${kvp[1]}`)
    }
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)