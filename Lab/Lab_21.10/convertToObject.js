function convertToObject(obj){
    obj=JSON.parse(obj)
    for (const iterator of Object.keys(obj)) {
         console.log(`${iterator}: ${obj[iterator]}`)
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')