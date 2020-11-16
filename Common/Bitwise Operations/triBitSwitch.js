function triBit(num, pos) {
    let n = parseInt(num)
    let p = parseInt(pos)
    let mask = 7 << p;
    let result = n ^ mask;
    console.log(result);
}

triBit(
    44444,
    4

)