// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 ===0);
//     document.write( numbers +  "i" );
// }

const matrix = new Array(3);
let counter = 1;
for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(3);
    for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = counter;
        counter++;
    }
}
let total = 0;
for(let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    } total += matrix[i][j];
}
console.log(total);