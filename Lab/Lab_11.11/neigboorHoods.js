function neigboorHoods(arr) {
    let map = new Map()
    let houses = arr.shift().split(', ')
    for (const iterator of houses) {
        map.set(iterator, [])
    }
    for (let i = 0; i < arr.length; i++) {
        let [house, person] = arr[i].split(' - ')
        if (map.has(house)) {
            map.get(house).push(person)
        }
    }
    let sorted=Array.from(map).sort((a,b)=>b[1].length-a[1].length)
    for (let house of sorted) {
        let name = house.shift()
        let persons = house.shift()
        console.log(`${name}: ${persons.length}`)
        if (persons.length > 0) {
            for (const iterator of persons) {
                console.log(`--${iterator}`)
            }
        }
    }
}
neigboorHoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
)