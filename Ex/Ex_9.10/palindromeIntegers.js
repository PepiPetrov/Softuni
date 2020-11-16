function palindromeIntegers(arr) {
    let str=''
    for (let num of arr) {
        let ispal='true'
        num=String(num)
        let mid=parseInt(num.length/2)
        for (let i = 0; i <=mid; i++){
            if(num[i]!==num[num.length-1-i]){
                ispal='false'
                break
            }
        }
        str+=ispal+'\n'
    }
    console.log(str)
}
palindromeIntegers([32,2,232,1010])
/*
false
true
false 
true
*/