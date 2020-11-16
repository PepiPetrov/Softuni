// let arr=[1,2,3,4]
// console.log(arr.unshift(12))
// console.log(arr.indexOf(12))
// let result=arr.shift()
// console.log(result,arr)
// arr=arr.map(String)
// console.log(arr)
// result=arr[0]
// console.log(typeof(result))
// function shift(a){
//     let result=a[0]
//     a[0]=''
//     return a
// }
// console.log(shift(arr))
// console.log(arr.filter(x=>x.length>0))
let some=[1,2,3,4,5]
console.log(some.sort((a,b)=>b-a))
some=[20,40,10,30,100,5]
console.log(some.sort((a,b)=>a-b))
some=['apple','banana','fruit','ceckon']
console.log(some.sort((a,b)=>a.localeCompare(b)))