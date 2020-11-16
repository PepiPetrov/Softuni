function oddTimes(arr) {
    let numbers = arr.split().map(x=>parseInt(x));
    let result = numbers[0];

    for (let i = 1; i < numbers.length; i++){
        result = result ^ numbers[i];
    }

    console.log(result);

}

oddTimes('1 2 3 2 3 2 3')