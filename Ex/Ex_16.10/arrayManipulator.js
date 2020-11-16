function arrayManipulations(arr, commands) {
    for (let i = 0; i < commands.length; i++) {
        let splited = commands[i].split(' ');
        let command = splited[0];
        if (command === 'add') {
            add();
        }
        else if (command === 'addMany') {
            addMany();
        }
        else if (command === 'contains') {
            contains();
        }
        else if (command === 'remove') {
            remove();
        }
        else if (command === 'shift') {
            shift();
        }
        else if (command === 'sumPairs') {
            sumPairs();
        }
        else if (command === 'print') {
            print();
            break;
        }
        function add() {
            let index = parseInt(splited[1]);
            let element = parseInt(splited[2]);
            arr.splice(index, 0, element);
        }
        function addMany() {
            let index = parseInt(splited[1]);
            for (let j = splited.length - 1; j >= 2; j--) {
                let element = parseInt(splited[j]);
                arr.splice(index, 0, element);
            }
        }
        function contains() {
            let element = parseInt(splited[1]);
            console.log(arr.indexOf(element));
        }
        function remove() {
            let index = parseInt(splited[1]);
            arr.splice(index, 1);
        }
        function shift() {
            let position = parseInt(splited[1]);
            for (let a = 0; a < position; a++) {
                let first = arr.shift();
                arr.push(first);
            }
        }
        function sumPairs() {
            arr = arr.map((e, i, arr) => i < arr.length - 1 ? (arr[i] += arr[i + 1]) : arr[i] = arr[i]).filter((e, i) => i % 2 === 0);
        }
        function print() {
            console.log('[ ' + arr.join(', ') + ' ]');
        }
    }
}
arrayManipulations([1, 2, 4, 5, 6, 7,8,9,10,100],
    ['add 1 8', 
    'add 1 88',
    'contains 1', 'contains 3','contains 88','addMany 1','remove 1','contains 88','sumPairs','print'])
    /* add <index> <element> – adds element at the specified index.
	addMany <index><element 1> <element 2> … <element n> – adds a set of elements at the specified index.
	contains <element> – prints the index of the first occurrence of the specified element (if exists) in the array or -1 if the element is not found.
	remove <index> – removes the element at the specified index.
	shift <positions> – shifts every element of the array the number of positions to the left (with rotation).
	For example, [1, 2, 3, 4, 5] -> shift 2 -> [3, 4, 5, 1, 2]
	sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).
	For example, [1, 2, 4, 5, 6, 7, 8] -> [3, 9, 13, 8].
	print – stop receiving more commands and print the last state of the array.
*/
