function companyUsers(arr){
    let companies=new Map()
    for (const iterator of arr) {
        let [firm,id]=iterator.split(' ->')
        if(companies.has(firm)){
            if(!companies.get(firm).includes(id)){
                companies.get(firm).push(id)
            }
        }else{
            companies.set(firm,[id])
        }
    }
    let sorted=Array.from(companies).sort((a,b)=>a[0].localeCompare(b[0]))
    for (const iterator of sorted) {
        console.log(iterator[0])
        for (const id of companies.get(iterator[0])) {
            console.log(`--${id}`)
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ])