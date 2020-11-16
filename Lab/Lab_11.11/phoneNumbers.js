function phoneNumbers(arr){
    let phones={}
    for (let iterator of arr) {
        let tokens=iterator.split(' ')
        let name=tokens.shift()
        let phone=tokens.shift()
        phones[name]=phone
    }
    for (let iterator in phones) {
        console.log(`${iterator} -> ${phones[iterator]}`)
    }
}

phoneNumbers(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)