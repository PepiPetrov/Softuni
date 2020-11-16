function addSub(a,b,c){
    let sum=0
    function add(x,y){
        return x+y
    }
    function sub(a,f){
        return a-f
    }
    sum=add(a,b)
    console.log(sub(sum,c))
}

addSub(23,6,10)