

function odd_even1(a) {

    console.log("Has return + Has parameter");
    if (a % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

console.log(odd_even1(2));


function odd_even(a) {
    console.log("Has parameter + No return");

    if (a % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }

}

odd_even(3);