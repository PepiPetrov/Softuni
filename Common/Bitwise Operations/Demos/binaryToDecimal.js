function binaryToDecimal(num) {
  // convert to hex
const hex = num.toString(2).toUpperCase();
console.log(`Binary: ${hex}`)
// back to dec:
const decNr = parseInt(hex, 2);
console.log(`Dec: ${decNr}`)
}
binaryToDecimal(32)
binaryToDecimal(24)