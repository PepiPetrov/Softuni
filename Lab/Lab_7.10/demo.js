function all(x, params, pa, param) {
    function countDown(x) {
        console.log(x);
        if (x > 0) { countDown(x - 1); }
    }

    countDown(x)

    function naes(params, pa) {
        return params + ' ' + pa
    }

    console.log(naes(params, pa))

    function a(param) {
        return params + ' ' + params + '#' + '34'
    }
    console.log(a(param))
}
function examples(index, arr, grade) {
    function isValid(index, arr) {

        if (index < 0 || index >= arr.length) {

            return false;

        } else {

            return true;

        }

    }
    isValid(index, arr)
    function pass(grade) {

        return grade >= 3;

    }
    console.log(pass(grade))
}

function swapElements(arr) {

    for (let i = 0; i < arr.length / 2; i++) {

        swap(arr, i, arr.length - 1 - i);

    }

    console.log(arr.join(' '));

    function swap(elements, i, j) {

        let temp = elements[i];

        elements[i] = elements[j];

        elements[j] = temp;

    }

}

swapElements([1,2,3,4,2,4,23,23,24,2,3,2,3,2,3,3,2,3,2])