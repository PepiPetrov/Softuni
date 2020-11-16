function mess(arr){
    let command=arr.shift()
    let chars=[]
    while(command!=='end'){
        let [name,mesa,meas]=command.split(' ')
        switch(name){
            case 'Chat':
                chars.push(mesa)
            break
            case 'Delete':
                if(chars.includes(mesa)){
                    chars.splice(chars.indexOf(mesa),1)
                }
            break
            case 'Edit':
                chars[chars.indexOf(mesa)]=meas
            break
            case 'Pin':
                chars.splice(chars.indexOf(mesa),1)
                chars.push(mesa)
            break
            case 'Spam':
                command=command.split(' ')
                command.splice(0,1)
                for (const iterator of command) {
                    chars.push(iterator)
                }
            break
        }
        command=arr.shift()
    }
    console.log(chars.join('\n'))
}

mess(["Chat John",
"Spam Let's go to the zoo",
"Edit zoo 1121kodKino1Protokol109Destruction",
"Chat tonight",
"Pin John",
'Spam Lallalla',
'Delete Lallalla',
'Chat 1121kodKino1Protokol109Destruction',
`Spam ${String.fromCharCode(111211)} ${String.fromCharCode(111222333)}`,
'Delete 뉫','Delete ḽ',
'Delete 1121kodKino1Protokol109Destruction',
"end"]
)