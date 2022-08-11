const arr = [5, 7, 8, 10, 45, 30];

function findOddSum(arr) {
    let oddSum = 0;
    for (const value of arr) {
        if (value % 2 !== 0) {
            oddSum += value;
        }
    }
    return oddSum;
}

console.log(findOddSum(arr));

