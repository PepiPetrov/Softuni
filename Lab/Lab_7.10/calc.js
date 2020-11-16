function calc(a,b,operator){
     let multiply=(x,y)=>console.log(x*y)
     let divide=(x,y)=>console.log(x/y)
     let add=(x,y)=>console.log(x+y)
     let substract=(x,y)=>console.log(x-y)
     switch(operator){
         case 'subtract':substract(a,b);break
         case 'add':add(a,b);break
         case 'multiply':multiply(a,b);break
         case 'divide':divide(a,b);break
     }
}