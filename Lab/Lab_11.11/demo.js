let myAssArr={}
myAssArr["Ley"]=12
myAssArr[1]=2
let key=12+"###### //#region //#endregion aa a  a a a "
myAssArr={
    "Ley":12,
    "1":2,
    [key]:"What is this????"
}
for (const key in myAssArr) {
    console.log(`${key}->${myAssArr[key]}`)
}
console.log(myAssArr)