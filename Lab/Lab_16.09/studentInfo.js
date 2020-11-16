function studentInfo(name,age,grade){
    age=parseInt(parseFloat(age))
    grade=parseFloat(grade).toFixed(2)
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade}`)
}

studentInfo('Marry', 12, 6.00)