function meetings(arr){
    let meetings={}
    for (let iterator of arr) {
        let [day,name]=iterator.split(' ')
        if(meetings.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`)
        }else{
            meetings[day]=name
            console.log(`Scheduled for ${day}`)
        }
    }
    for (const key in meetings) {
        console.log(`${key} -> ${meetings[key]}`)
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Wonday Tim',
'Friday Tim']
)