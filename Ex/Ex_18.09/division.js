function division(n){
    let max=Number.NEGATIVE_INFINITY
    //2, 3, 6, 7, and 10
    if(n%2===0){
        if(2>max){
            max=2
        }
    }
    if(n%3===0){
        if(3>max){
            max=3
        }
    }
    if(n%6===0){
        if(6>max){
            max=6
        }
    }
    if(n%7===0){
        if(max<7){
            max=7
        }
    }
    if(n%10===0){
        if(max<10){
            max=10
        }
    }
    if(max===Number.NEGATIVE_INFINITY){
        console.log(`Not divisible`)
        return
    }else{
        console.log(`The number is divisible by ${max}`)
    }
}

division(30)
division(15)
division(12)
division(1643)