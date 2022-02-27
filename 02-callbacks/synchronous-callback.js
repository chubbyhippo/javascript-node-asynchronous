function greet(name) {
    console.log(`Hello ${name}`);
}

function higherOrderFunction(callback) {
    const name = "Hippo";
    callback(name);
}

higherOrderFunction(greet);

let numbers = [1, 2, 4, 6, 8, 5, 7];
const sortedNumbers = numbers.sort((a, b) => b - a);
console.log(sortedNumbers);
const map = numbers.map(value => value * 2);
console.log(map);

