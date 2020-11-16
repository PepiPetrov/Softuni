function oddEvenSum(a) {
    let str=String(a)
    let even=0
    let odd=0
    for(let i=0;i<str.length;i++){
        let num=str[i]%2==0?even+=Number(str[i]):odd+=Number(str[i])
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`)
}