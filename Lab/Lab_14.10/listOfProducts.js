function listOfProducts(arr){
    let sorted=arr.sort()
    for (let i = 0; i < sorted.length; i++) {
        let product = sorted[i];
        console.log(`${i+1}.${product}`)
    }
}

listOfProducts(["Onion", "Tomatoes", "Peppers"])