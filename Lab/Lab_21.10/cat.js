function cat(arr) {
    class Cat{
        constructor(name,age){
            this.name=name
            this.age=age
        }
        cat(){
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    let cats=[]
    for (const iterator of arr) {
          let [catName,catAge]=iterator.split(' ')
          let cat=new Cat(catName,catAge)
          cat.cat()
    }
}

cat(['Mellow 2', 'Tom 5','Peter 10'])