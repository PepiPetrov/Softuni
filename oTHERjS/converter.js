function eurConverter([bgn]) {
    let eur = (bgn / 1.95583).toFixed(2);
    if(0>bgn)
    {
        console.log("Въведете положително число");
    }
    else
    {
    console.log(eur);
    }
}
