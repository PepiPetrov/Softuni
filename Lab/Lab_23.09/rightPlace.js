function rightPlace(str1,b,str2){
    let newString=str1.replace('_',b)
    if(newString===str2){
        console.log(`Matched`)
    }else{
        console.log(`Not Matched`)
    }
}

rightPlace('Str_ng', 'I', 'Strong')