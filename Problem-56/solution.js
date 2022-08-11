function volumeOfTriangle(a, b, c) {

    const r = (a + b + c) / 2;

    const area = Math.sqrt(r * (r - a) * (r - b) * (r - c));

    const height = (2 * area) / a;

    const volume = area * height;

    return volume;
}

const side1 = 10;
const side2 = 10;
const side3 = 10;

console.log("Volume of triangle is :", volumeOfTriangle(side1, side2, side3).toFixed(2));