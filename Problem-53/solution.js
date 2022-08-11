const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function makeAvg(arr) {
    let sum = 0;
    for (const value of arr) {
        sum += value;
    }

    const avg = sum / arr.length;

    return avg;
}

console.log("Average is : ", makeAvg(arr));