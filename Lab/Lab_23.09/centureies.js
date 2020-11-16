function centureies(wek){
    let years=wek*100
    let days=Math.trunc(years*365.2422)
    let hours=days*24
    let minutes=hours*60
    console.log(`${wek} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`)
}
centureies(1608)
//1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes
//5 centuries = 500 years = 182621 days = 4382904 hours = 262974240 minutes