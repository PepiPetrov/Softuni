function personInfo(name, fam, age) {
    let person={}
    person.firstName=name
    person.lastName=fam
    person.age=age
    return person
}
personInfo('Peter', 'Petrov', 10)