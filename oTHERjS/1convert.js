var mymoney
function euro(mymoney)
{
    let leva=parseFloat(mymoney);
    let euro=leva/1.95583;
    console.log(euro.toFixed(2));
}
euro([5]);