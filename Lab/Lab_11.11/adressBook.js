function adresses(arr){
    let adress={}
    for (let iterator of arr) {
        let tokens=iterator.split(':')
        let name=tokens.shift()
        let phone=tokens.shift()
        adress[name]=phone
    }
    let sorted=Object.entries(adress)
    sorted=sorted.sort((a,b)=>a[0].localeCompare(b[0]))
    for (let [anme,adres] of sorted) {
        console.log(`${anme} -> ${adres}`)
    }
}
adresses(['Tim:Doe Crossing',
 'Bill:Nelson Place',
 'Peter:Carlyle Ave',
 'Bill:Ornery Rd'])
