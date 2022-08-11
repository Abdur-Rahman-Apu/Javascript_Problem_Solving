
const fruits = ['Apple', 'Banana', 'Orange'];

// Ans to the question no a 

const indexOfBanana = fruits.indexOf('Banana');

fruits[indexOfBanana] = 'Mango';

console.log("New array:", fruits);


// Ans to the question no b 

fruits.pop('Orange');

fruits.push('Watermelon');

console.log("New array:", fruits);