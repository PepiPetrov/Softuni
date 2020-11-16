function printCertificate(grade, namesArr) {
    if (pass(grade)) {
        printHeader();
        console.log(getName(namesArr));
        formatGrade(grade);
    } else {
        console.log(getName(namesArr) + ' does not qualify');
    }

    function pass(grade) {
        return grade >= 3;
    }

    function printHeader() {
        console.log('~~~-   {@}   -~~~');
        console.log('~- Certificate -~');
        console.log('~~~-  ~---~  -~~~');
    }

    function getName(nameArr) {
        return nameArr[0] + ' ' + nameArr[1];
    }

    function formatGrade(grade) {
        let result = '';
        if (grade < 3) {
            result = 'Fail (2)';
        } else if (grade < 3.5) {
            result = `Poor (${grade.toFixed(2)})`;
        } else if (grade < 4.5) {
            result = `Good (${grade.toFixed(2)})`;
        } else if (grade < 5.5) {
            result = `Very good (${grade.toFixed(2)})`;
        } else {
            result = `Excellent (${grade.toFixed(2)})`;
        }

        console.log(result);
    }
}

printCertificate(6, ['John', 'Smith']);