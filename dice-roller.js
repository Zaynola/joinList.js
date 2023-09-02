const numberofDice = process.argv[2];
function diceRoller() {
    return Math.floor(Math.random() * 6)
}

const result = [];
for (let i = 0; i < numberofDice; i++) {
    result.push(diceRoller()) + 1;
}

console.log(`Rolled ${numberofDice}: ${result.join(', ')}`)