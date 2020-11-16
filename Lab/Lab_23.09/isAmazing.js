function isAmazing(num){
    let newNum=num.toString()
    let sum=0
    for(let i=0;i<newNum.length;i++){
        sum+=Number(newNum[i])
    }
    let isContains=sum.toString().includes('9')
    let result=`${num} Amazing? `
    if(isContains){
        result+='True'
    }else{
        result+='False'
    }
    console.log(result)
}

isAmazing(999)