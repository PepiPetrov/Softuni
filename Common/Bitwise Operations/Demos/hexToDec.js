function hexToDec(num){
// convert to hex
const hex = num.toString(16).toUpperCase();
console.log(`Hex: ${hex}`)
// back to dec:
const decNr = parseInt(hex, 16);
console.log(`Dec: ${decNr}`)
}

hexToDec(123)