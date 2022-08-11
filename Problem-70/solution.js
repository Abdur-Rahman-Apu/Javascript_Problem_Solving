

function paperRequirements(firstBookQuantity, secondBookQuantity, thirdBookQuantity) {
    const firstBookPage = 100;
    const secondBookPage = 200;
    const thirdBookPage = 300;

    const totalPage = (firstBookPage * firstBookQuantity) + (secondBookPage * secondBookQuantity) + (thirdBookPage * thirdBookQuantity);

    return totalPage;
}

const firstBookQuantity = 1, secondBookQuantity = 2, thirdBookQuantity = 3;

console.log("Total page: ", paperRequirements(firstBookQuantity, secondBookQuantity, thirdBookQuantity));
