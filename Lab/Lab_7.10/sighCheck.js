function check(a,b,c){
    let result=''
    let multiply=a*b*c
    if(multiply>=0){
        result='Positive'
    }else{
        result='Negative'
    }
    console.log(result)
}

check(5,12,-1)