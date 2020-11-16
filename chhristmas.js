function christmas(input){
    let ind=0
                let days = parseInt(input[ind])
                ind++
     
                let money = 0.0;
                let dayWon = 0;
                let dayLost = 0;
     
                for (let i = 1; i <= days; i++){
                    let dailyMoney = 0.0;
                    let win = 0;
                    let lose = 0;
     
                    while (true){
                        let sport = input[ind];
                        ind++
     
                        if (sport == "Finish"){
                            break;
                        }
     
                       let result = input[ind]
                       ind++
                        if (result == "win"){
                            win ++;
                            dailyMoney += 20;
                        }
                        else{
                            lose ++;
                        }
                    }
                    if (win > lose){
                        dailyMoney *= 1.1;
                        dayWon += 1;
                    }
                    else{
                        dayLost += 1;
                    }
                    money += dailyMoney;
                }
                if (dayWon > dayLost){
                    console.log(`You won the tournament! Total raised money: ${(money * 1.2).toFixed(2)}`);
                }
                else{
                    console.log(`You lost the tournament! Total raised money: ${money.toFixed(2)}`);
                }
}


christmas([
    '2',         'volleyball',
    'win',       'football',
    'lose',      'basketball',
    'win',       'Finish',
    'golf',      'win',
    'tennis',    'win',
    'badminton', 'win',
    'Finish'
  ]
  )