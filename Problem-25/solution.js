

const bookPrice = [100, 200, 201, 90, 300, 400];


for (let i = 0; i < bookPrice.length; i++) {
    if (bookPrice[i] > 200) {
        continue;
    }
    console.log(bookPrice[i]);
}