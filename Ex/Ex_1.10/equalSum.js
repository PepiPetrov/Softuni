function equalSums(arr = []) {
    let isFound = false;
 
    for (let i = 0, length = arr.length; i < length; i++) {
        let sumLeft = 0;
        let sumRight = 0;
        if (i !== 0 || i !== arr.length) {
            for (let j = 0, k = arr.length - 1; j < i || k > i; j++, k--) {
 
                if (j < i) {
                    sumLeft += arr[j];
                }
                if (k > i) {
                    sumRight += arr[k];
                }
            }
 
            if (sumLeft === sumRight) {
                isFound = true;
                console.log(i);
            }
        }
    }
    if (!isFound) {
        console.log("no");
    }
}

equalSums([1,2,3,3])