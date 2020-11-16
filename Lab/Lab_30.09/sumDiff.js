function sumDiff(input){
    let even=0
    let odd=0
    for (let iterator of input) {
        if(iterator%2==0){
             even+=iterator
        }else{
            odd+=iterator
        }
    }
    console.log(even-odd)
}

sumDiff([1,2,3,4,5])