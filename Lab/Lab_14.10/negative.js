function negative(arr){
   let result=[]
   for (const num of arr) {
       if(num<0){
           result.unshift(num)
       }else{
           result.push(num)
       }
   }
   for (const iterator of result) {
        console.log(iterator)
   }
}

negative([-1,2,3,-2])