function spiceMustFlow(n) {
    let mine = parseInt(n)
    let harvest = 0;
    let days = 0;

    if (mine >= 100) {
        while (mine >= 100) {
            days++;
            harvest += mine - 26;
            mine -= 10;
        }
        harvest -= 26;
    }
    console.log(days + '\n' + harvest);
}
spiceMustFlow(183)
