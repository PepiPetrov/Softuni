function sumDigits(num){
    let newnum=num.toString()
    let sum=0
    for(let i=0;i<newnum.length;i++){
         sum+=Number(newnum[i])

    }
    console.log(sum);
}

sumDigits(345)