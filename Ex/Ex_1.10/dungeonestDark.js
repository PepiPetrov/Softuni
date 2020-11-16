function dungeonDark(arr){
    let dungen=arr[0].split('|')
    let health=100
    let coins=0
    let roomCont=0
    let allCoins=0
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
            }else{
                console.log(`You died! Killed by ${command}.`)
                console.log(`Best room: ${roomCont}`)
                return
            }
        }
    }
    console.log(`You've made it!`)
    console.log(`Coins: ${allCoins}`)
    console.log(`Health: ${health}`)
}
dungeonDark(['cat 10|slayed 12|potion 30|chest 10|snake 25|chest 110|snk 21|chest 1100|potion 1|car 12|potion 100|erert 12|chest 1203940']);
  