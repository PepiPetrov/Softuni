function legendaryFarming(str){
    let arr=str.toLowerCase().split(' ')
    let legendary={'fragments':0,'shards':0,'motes':0}
    let junk={}
    let hasToBreak=false
    while(!hasToBreak&&arr.length>0){
        let quantity=+arr.shift()
        let name=arr.shift()
        switch(name){
            case 'shards':
                legendary[name]+=quantity
                if(legendary[name]>=250){
                    console.log(`Shadowmourne obtained!`);
                    legendary[name]-=250
                    hasToBreak=true
                }
            break
            case 'fragments':
                legendary[name]+=quantity
                if(legendary[name]>=250){
                    console.log(`Valanyr obtained!`);
                    legendary[name]-=250
                    hasToBreak=true
                }
            break
            case 'motes':
                legendary[name]+=quantity
                if(legendary[name]>=250){
                    console.log(`Dragonwrath obtained!`);
                    legendary[name]-=250
                    hasToBreak=true
                }
            break
            default:
                if(!junk.hasOwnProperty(name)){
                    junk[name]=0
                }
                junk[name]+=quantity
        }
    }
    Object.entries(legendary)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach((item) => {
            console.log(`${item[0]}: ${item[1]}`);
        });
 
    Object.entries(junk)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach((item) => {
            console.log(`${item[0]}: ${item[1]}`);
        });
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 7 Shards 6666666 motes')