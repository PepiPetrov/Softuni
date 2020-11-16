function magic(arr,n){
   for (let i = 0; i < arr.length; i++) {
       
       for(let j=i+1;j<arr.length;j++){
           let sum=arr[i]+arr[j]
           if(sum===n){
               console.log(arr[i],arr[j])
           }
       }
       
   }
}

magic([1, 2, 3, 4, 5, 6],
    6
    )