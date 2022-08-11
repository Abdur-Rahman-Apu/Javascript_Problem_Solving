const myYear = 23;

function oddEven(year) {
    if (year % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const evenOrOdd = oddEven(myYear);

if (evenOrOdd) {
    console.log("My age is even");
} else {
    console.log("My age is odd");
}