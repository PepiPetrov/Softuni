function calculate([a,b,znak]){
   if(znak=="+"){
       let sbor=a+b;
       if(sbor%2==0){
           console.log("even");
       }
       else{
        console.log("odd");
       }
       
    }
    else if(znak=="-"){
        let raz=a-b;
        if(raz%2==0){
            console.log("even");
        }
        else{
            console.log("odd");
        }
    }
    else if(znak=="*"){
        let proiz=a*b
        if(proiz%2==0){
            console.log("even");
        }
        else{
            console.log("odd");
        }
    }
    else if(znak=="/") {
        let rez=a/b;
        let to=(rez).toFixed(2);
        console.log(`${a}/${b}=${to}`);
        if(b==0){
            console.log(`Cannot divide ${a} by zero.`);
        }
    }
    else if(znak=="%"){
       let ost=a%b;
       console.log(ost);
    }
}

calculate([2,3,'-'])