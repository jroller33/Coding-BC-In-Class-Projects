const grades = [56, 78, 99, 85];

function findAverage(accumulator, currentValue, index, array) {
    accumulator, currentValue, index = 0;
    if (index === array.length - 1) {
        return (accumulator + currentValue) / array.length;
    }
    return accumulator + currentValue;
}

let gradeAverage = grades.reduce(findAverage);

console.log(gradeAverage);
