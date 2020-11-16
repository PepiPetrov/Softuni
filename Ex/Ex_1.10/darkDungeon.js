function dungeonDark(arr){
    let dungen=arr[0].split('|')
    let health=100
    let coins=0
    let roomCont=0
    let allCoins=0
    let monsters=0
    for(let i=0;i<dungen.length;i++){
        let cur=dungen[i].split(' ')
        let command=cur[0]
        let num=Number(cur[1])
        roomCont++
        if(command==='potion'){
            if((health+num)>100){
                num=health-100
                health=100
            }else{
                health+=num
            }
            if(num<0){
                num*=-1
            }
            console.log(`You healed for ${num} hp.`)
            console.log(`Current health: ${health} hp.`)
        }else if(command==='chest'){
            coins=Number(num)
            allCoins+=coins
            console.log(`You found ${coins} coins.`)
        }else{
            health-=Number(num)
            if(health>0){
                console.log(`You slayed ${command}.`)
                monsters++
            }else{
                console.log(`You died! Killed by ${command}.`)
                console.log(`Best room: ${roomCont}`)
                return
            }
        }
        if(monsters%5===0){
            health+=50
            allCoins+=50
        }
    }
    console.log(`You've made it!`)
    console.log(`Coins: ${allCoins}`)
    console.log(`Health: ${health}`)
    console.log(`Killed monsters: ${monsters}`)
}
dungeonDark(['cat 10|potion 30|chest 10|snake 25|chest 110|lion 12|snakeByDad 23|theMag 34']);
  