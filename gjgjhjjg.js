function stip (incom, score, minSalary){
    incom = Number(incom);
    score = Number (score);
    minSalary = Number(minSalary);
    let social = Math.floor(minSalary*0.35);
    let scholar = Math.floor(score*25);
    if(score < 4.50){
        console.log("You cannot get a scholarship!");
    }else if(score < 5.50 && incom > minSalary){
        console.log("You cannot get a scholarship!");
    }else if(score > 4.50 && score < 5.50 && incom < minSalary){
        console.log(`You get a Social scholarship ${social} BGN`);
    }else if(score >=5.50 && incom < minSalary){
        if(scholar>social){
            console.log(`You get a scholarship for excellent results ${scholar} BGN`);
        }else if(scholar < social){
            console.log(`You get a Social scholarship ${social} BGN`);
        }
    }else if(score>=5.50 && minSalary< incom){
        console.log(`You get a scholarship for excellent results ${scholar} BGN`);
    }
}
stip(480.00,
    4.60,
    450.00)