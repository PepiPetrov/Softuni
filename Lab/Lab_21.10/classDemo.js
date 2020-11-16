class person{
    constructor(name,age,email,birth,languages,speakEnglish,salary,){
        this.name=name
        this.age=age
        this.email=email
        this.birth=birth
        this.languages=languages
        this.salary=salary
        this.speakEnglish=speakEnglish
        
        console.log(`Name: ${name}`)
        console.log(`Age: ${age}`)
        console.log(`Email: ${email}`)
        console.log(`Birth date: ${birth}`);
        console.log(`Languages: \nI can program on ${languages.join(', ')}`)
        speak(speakEnglish)
        function speak(can){
            if(can){
                console.log(`I can speak English.`)
                return true
            }else{
                console.log(`I can't speak English.`)
                return false
            }
        }
        console.log(`My salary is ${salary}$ per month.`)
    }

    
}

let result=new person('Peter',10,'nonoPeno#$@gmei.cmo','22.07.2010',['Javscript','C++'],true,100000)
console.log(result instanceof person)
person.sayIamHappy()