function passwordValidator(pass){
      function isValidLen(p){
          if(p.length>=6&&p.length<=10){
              return true
          }else{
              return `Password must be between 6 and 10 characters`
          }
      }
      function char(p){
          let ispass=true
          for (let i = 0; i < p.length; i++) {
              let isvalid=true
              let code=p[i].charCodeAt()
              if(code>=65&&code<=90||code>=97&&code<=122||code>=48&&code<=57){
                     isvalid=true
                     ispass=true
              }else{
                  isvalid=false
                  ispass=false
                   break
              }
          }
          return ispass==true?true:`Password must consist only of letters and digits`
      }
      function atLeastTwoDigits(p){
          let count=0
          for(let i=0;i<p.length;i++){
              let code=p[i].charCodeAt()
                if(code>=48&&code<=57){
                    count++
                }
          }
          return count>=2?true:'Password must have at least 2 digits'
      }
      let result=[]
      if(isValidLen(pass)!==true){
          result.push(isValidLen(pass))
      }
      if(char(pass)!==true){
        result.push(char(pass))
      }
      if(atLeastTwoDigits(pass)!==true){
        result.push(atLeastTwoDigits(pass))
     }
     if(atLeastTwoDigits(pass)===true&&isValidLen(pass)==true&&char(pass)==true){
         result.push('Password is valid')
     }
     console.log(result.join('\n'))
}

passwordValidator('MyPass123')