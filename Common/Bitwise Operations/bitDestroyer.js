function bitDestroyer(num,pos){
    let n=num,p=pos,mask=~(1<<p),newNum
    newNum=n&mask
    console.log(newNum)
}

bitDestroyer(111,6)