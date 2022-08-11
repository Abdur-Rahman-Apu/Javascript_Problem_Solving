
const arr = [1, 2, 3];



function make_avg(arr, len) {
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum += arr[i];
    }

    return (sum / len);
}


console.log("Avg is : ", make_avg(arr, arr.length));