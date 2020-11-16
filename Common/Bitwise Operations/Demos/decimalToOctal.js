function octalToDec(num) {
    // convert to octal
    const hex = num.toString(8).toUpperCase();
    console.log(`Hex: ${hex}`)
    // back to dec:
    const decNr = parseInt(hex, 8);
    console.log(`Dec: ${decNr}`)
}

octalToDec(123)