const arr = [1, 2, 3, 4, 5, 6, -1, 9, 10];

function findPositive(arr) {
    const newArr = [];

    for (const value of arr) {
        if (value < 0) {
            break;
        } else {
            newArr.push(value);
        }
    }

    return newArr;
}

console.log(findPositive(arr));