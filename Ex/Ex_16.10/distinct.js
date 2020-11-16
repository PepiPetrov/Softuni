function distinct(input){
    let outputArr = [];
    for(let element of input){
        if(!outputArr.includes((element))){
            outputArr.push(element);
        }
    }
    console.log(outputArr.join(' '));
}

distinct([20, 8, 12, 13, 4, 4, 8, 5])