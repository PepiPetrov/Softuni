var n;
function eurConverter([n]){
    let bgn=Number(n)//document.getElementById("bgn").nodeValue;
    let eur=(bgn/1.95583).toFixed(2);
    //document.getElementById("euro").value=eur;
    console.log(eur);
}
eurConverter([5])