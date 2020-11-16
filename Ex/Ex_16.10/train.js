function train(input) {
    const train = input.shift().split(` `).map(Number);
    const capacity = Number(input.shift());
    for (const line of input) {
        const tokens = line.split(` `);
        const command = tokens[0];
        if (command === `Add`) {
            train.push(Number(tokens[1]));
        } else {
            for (const wagon in train) {
                if (train[wagon] + Number(tokens[0]) <= capacity) {
                    train[wagon] += Number(tokens[0]);
                    break;
                }
            }
        }
    }
    console.log(train.join(` `));
}


train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)

//72 54 21 12 4 75 23 10 0
