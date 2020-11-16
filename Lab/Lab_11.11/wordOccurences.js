function wordsOccurences(array) {
    let wantedWordsCounts = new Map();
    for (const iterator of array) {
        if(!wantedWordsCounts.has(iterator)){
            wantedWordsCounts.set(iterator,1)
        }else{
            wantedWordsCounts.set(iterator,wantedWordsCounts.get(iterator)+1)
        }
    }
    let sore=Array.from(wantedWordsCounts).sort((a,b)=>b[1]-a[1])
    for (const [name,times] of sore) {
        console.log(`${name} -> ${times} times`)
    }
}
wordsOccurences(["Here","is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])
