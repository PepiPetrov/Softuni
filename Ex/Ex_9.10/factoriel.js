function factoriel(a, b) {
    let first = 1
    let second = 1
    for (let i = 1; i <= a; i++) {
        first *= i
    }
    for (let i = 1; i <= b; i++) {
        second *= i
    }
    console.log((first/second).toFixed(2))
}

factoriel(5,2)