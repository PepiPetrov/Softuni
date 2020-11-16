function login(input) {
    let user = input.shift()
    let correct = user.split('').reverse().join('')
    for(let i=1;i<=4;i++){
        let pass=input.shift()
        if(pass===correct){
            console.log(`User ${user} logged in.`)
            break
        }else{
            if(i===4){
                console.log(`User ${user} blocked!`)
                break
            }else{
                console.log(`Incorrect password. Try again.`)
            }
        }
    }
}

login(['nene','nene','mama','tate','enen'])