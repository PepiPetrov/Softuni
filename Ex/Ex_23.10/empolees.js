function empolees(names){
    class Person{
        constructor(name){
            this.name=name
            let obk={name:name.length}
            return obk
        }
    }
    for (let i = 0; i <names.length; i++) {
        let obj=new Person(names[i])
        let command=names[i]
        obj.names=command
        obj.num=command.length
        let prom=`Name: ${obj.names} -- Personal Number: ${obj.num}`
        obj={}
        console.log(prom)   
    }
}

empolees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']
    )