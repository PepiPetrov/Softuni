function day(dayOfWeek){
    let week=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
   if(dayOfWeek>=1&&dayOfWeek<=7){
       console.log(week[dayOfWeek-1])
   }else{
       console.log(`Invalid day!`)
   }
}

day(3)