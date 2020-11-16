function commonEl(a,b){
    for (let i = 0; i < a.length; i++) {
        let elb=b[i]
        if(a.includes(elb)){
            console.log(elb)
        }
    }
}

commonEl(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)