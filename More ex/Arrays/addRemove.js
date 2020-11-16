function addAndRemove(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let com=arr[i]
        if (com === 'remove') {
            result.pop();
        } else if (com === 'add') {
            result.push(i + 1);
        }
    }

    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join(' '));
    }
}

addAndRemove(['remove', 'remove', 'remove'])