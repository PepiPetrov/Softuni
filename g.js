function fruitStore(strawberriesPerKg, bananasKg, orangesKg, raspberriesKg, strawberriesKg) {
    let raspberriesPerKg = Number(strawberriesPerKg) / 2;
    let orangesPerKg = raspberriesPerKg - (40 / 100) * raspberriesPerKg;
    let bananasPerKg = raspberriesPerKg - (80 / 100) * raspberriesPerKg;
    let totalSumRaspberries = Number(raspberriesKg) * raspberriesPerKg;
    let totalSumOranges = Number(orangesKg) * orangesPerKg;
    let totalSumBananas = Number(bananasKg) * bananasPerKg;
    let finalTotalSumStrawberries = Number(strawberriesKg) * Number(strawberriesPerKg);
    let totalResultSum = (totalSumRaspberries + totalSumOranges + totalSumBananas + finalTotalSumStrawberries).toFixed(2);
    console.log(totalResultSum);
    }
    fruitStore("48", "10", "3.3", "6.5", "1.7");