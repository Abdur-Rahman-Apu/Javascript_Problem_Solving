
const arr = [1, 2, 3, 4, 100, 34444, 9, 5, 0];

const largeNum = [];

let largeElement = -9999;
for (const value of arr) {

    if (value > largeElement) {

        largeElement = value;
        largeNum.push(value);

    }
}

console.log(largeNum);

console.log("Second largest element is: ", largeNum[largeNum.length - 2]);