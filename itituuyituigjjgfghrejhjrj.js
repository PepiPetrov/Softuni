function toyShop(arg1,arg2,arg3,arg4,arg5,arg6) {
    arg1 = Number(arg1);
    arg2 = Number(arg2);
    arg3 = Number(arg3);
    arg4 = Number(arg4);
    arg5 = Number(arg5);
    arg6 = Number(arg6);

    let price = arg1;
    let puzzlesCount = arg2;
    let dollsCount = arg3;
    let bearsCount = arg4;
    let minionsCount = arg5;
    let trucksCount = arg6;
    let money = puzzlesCount* 2.6 + dollsCount * 3 + bearsCount * 4.10 + minionsCount * 8.20 + trucksCount * 2;

    let toys = puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount
    if (toys >= 50){
       money = money - money * 0.25;
       //money=money*0.75
    } 
    money = money - money * 0.10;
    if (money >= price ){
        console.log(`Yes! ${(money - price).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${Math.abs(money - price).toFixed(2)} lv needed.`)
    }
}
toyShop(320,8,2,5,5,1)