const c = 26;

function celciusToFarenhite(c) {
    const f = ((9 * c) / 5) + 32;
    return f;
}

console.log(`${c} celcius = ${celciusToFarenhite(c)} Farenhite`);