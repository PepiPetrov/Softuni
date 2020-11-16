function bitAtPositionOne(num){
    let p=1,n=num,last
    n=n>>p
    last=n&1
    console.log(last)
}

bitAtPositionOne(13)