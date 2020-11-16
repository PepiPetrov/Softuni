function partyTime(arr) {
    let list = {
        'VIP': [],
        'regular': []
    }
    let command = arr.shift()
    while (command !== 'PARTY') {
        let char = command[0]
        if (isNaN(char)) {
            list['VIP'].push(command)
        } else {
            list['regular'].push(command)
        }
        command = arr.shift()
    }
    arr.forEach(name => {
        if(list['VIP'].includes(name)){
            let i=list['VIP'].indexOf(name)
            list['VIP'].splice(i,1)
        }else if(list['regular'].includes(name)){
            let i=list['regular'].indexOf(name)
            list['regular'].splice(i,1)
        }
    });
    console.log(list['regular'].length+list['VIP'].length)
    console.log(list['regular'].join('\n'))
    console.log(list['VIP'].join('\n'))
}

partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]
)