const aliaMark = 95;
const daliaMark = 66;
const saliaMark = 80;
const maliaMark = 59;
const liliaMark = 47;
const jalaiaMark = 77;



function gradeFind(mark) {
    if (mark < 50) {

        console.log("F grade");

    } else if (mark >= 50 && mark < 60) {

        console.log("D grade");

    } else if (mark >= 60 && mark < 70) {

        console.log("C grade");

    } else if (mark >= 70 && mark < 80) {

        console.log("B grade");

    } else if (mark >= 80 && mark < 90) {

        console.log("A grade");

    } else {

        console.log("A+");
    }
}


console.log("Alia's grade :");
gradeFind(aliaMark);

console.log("Dalia's grade :");
gradeFind(daliaMark);

console.log("Salia's grade :");
gradeFind(saliaMark);

console.log("Malia's grade :");
gradeFind(maliaMark);

console.log("llia's grade :");
gradeFind(liliaMark);

console.log("Jalia's grade :");
gradeFind(jalaiaMark);