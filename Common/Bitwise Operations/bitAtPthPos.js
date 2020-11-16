function bitAtPth(num,p){
        let n=num,cur
        n=n>>p
        cur=n&1
        console.log(cur)
}

bitAtPth(257,6)