const farenhite = 20;

function farenhiteToCelcius(f) {
    const c = ((f - 32) * 5) / 9;
    return c;
}

console.log(`${farenhite} farenhite = ${farenhiteToCelcius(farenhite).toFixed(2)} celcius`);