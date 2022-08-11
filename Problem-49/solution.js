
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findAvg(arr) {
    let sum = 0;
    for (const value of arr) {
        sum += value;
    }
    return (sum / arr.length);
}


console.log(findAvg(arr));