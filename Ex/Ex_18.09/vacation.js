function vacation(dys,type,day){
    dys=parseInt(dys)
    let sum=0
    switch(type){
        case 'Students':
            switch(day){
               case 'Friday':sum=8.45*dys;break
               case 'Saturday':sum=9.8*dys;break
               case 'Sunday':sum=10.46*dys;break
            }
        if(dys>=30)sum*=0.85
        break
        case 'Business':
            let suday=0
            switch(day){
               case 'Friday':sum=10.9*dys;suday=10.9;break
               case 'Saturday':sum=15.6*dys;suday=15.6;break
               case 'Sunday':sum=16*dys;suday=16;break
            }
        if(dys>=100){
            sum-=10*suday
        }
        break
        case 'Regular':
            switch(day){
               case 'Friday':sum=15*dys;break
               case 'Saturday':sum=20*dys;break
               case 'Sunday':sum=22.5*dys;break
            }
        if(dys>=10&&dys<=20)sum*=0.95
        break
    }
    console.log(`Total price: ${sum.toFixed(2)}`)

}

vacation(40,
    "Regular",
    "Saturday"    
    )