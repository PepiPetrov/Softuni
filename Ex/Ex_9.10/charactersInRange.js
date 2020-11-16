function charInRange(a, b) {
    let first=a.charCodeAt()
    let second=b.charCodeAt()
    let start=first<second?first:second
    let end=first>second?first:second
    let str=''
    for (let i = start+1; i <end; i++) {
        let toStr=String.fromCharCode(i)
        str+=toStr+' '
    }
    console.log(str)
}
charInRange('а','г')
charInRange('\\','/')
charInRange('а','d')