

function checkPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    if (i === num) {
        return true;
    }

}

const num = 7;

if (checkPrime(num)) {
    console.log(`${num} is a prime number`);
} else {
    console.log(`${num} is not a prime number`);
}