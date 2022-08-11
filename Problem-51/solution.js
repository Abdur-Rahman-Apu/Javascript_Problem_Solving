
const arr = [1, 2, 3, 4, -1, 5, 6, 7, -2, 9, 10];

let smallestNum = 9999;

for (const value of arr) {
    if (value < smallestNum) {
        smallestNum = value;
    }
}

console.log("Smallest element is : ", smallestNum);