let person={
    first:'Peter',
    second:'Plamenov',
    third:'Petrov',
    age:10,
    birth:2010,
    month:'07',
    day:22,
    email:'nono@gmail.com',
    myHello:function(){
        console.log('Hello, guys!')
    },
    type(){
        console.log(typeof(person))
    }
}

let arr=[person.birth,person.month,person.day]
console.log(`Brt date: ${arr.reverse().join('.')}`)
person.myHello()
person.type()
console.log(Object.values(person))
for (const iterator of Object.keys(person)) {
    console.log(`${iterator}:${person[iterator]}`)
}


