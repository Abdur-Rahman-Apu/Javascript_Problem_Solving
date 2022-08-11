
const years = [2023, 2024, 2025, 2028, 2030];

function findLeapYear(years) {
    const leapYear = [];

    for (const year of years) {
        if (year % 400 === 0) {
            leapYear.push(year);
        } else if (year % 100 === 0) {
            continue;
        } else if (year % 4 === 0) {
            leapYear.push(year);
        }
    }

    return leapYear;
}

console.log("Leap Years:", findLeapYear(years));

