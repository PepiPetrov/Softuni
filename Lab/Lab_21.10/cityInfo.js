function cityInfo(town){
    for (const iterator of Object.keys(town)) {
        console.log(`${iterator}:${town[iterator]}`)
    }
}