
function ramka(n){
    n=Number(n)
    let top="+"
    for(let top1=0;top1<n-2;top1++){
        top+=" -"
        top+=" +"
        console.log(top);}
        for(let mid=0;mid<n-2;mid++){
            let midrow="|"
            for(let j=0;j<n-2;j++){
                midrow+=" -"
            }
            midrow+=" |"
            console.log(midrow);
            
        } 
    }
    let botrow="+"
    for(let bot=0;bot<n-2;bot++){
        botrow+=" -"
    }
    botrow+=' +'
    console.log(botrow);



ramka(4)