

const num = [10, 50, 100, 3444, 9, 8, 7, 2];

let smallElement = 9999;
let largestElement = -9999;

const largeElements = [];

for (const value of num) {
    if (value < smallElement) {
        smallElement = value;
    }

    if (value > largestElement) {
        largestElement = value;
        largeElements.push(value);
    }
}

console.log("Smallest element is: ", smallElement);

console.log("Second largest element is: ", largeElements[largeElements.length - 2]);