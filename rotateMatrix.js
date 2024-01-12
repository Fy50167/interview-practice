/**
 * Given an image represented by an NxN matrix, where each pixel in the image is 4
bytes, write a method to rotate the image by 90 degrees. Can you do this in place? 
 */

const rotateMatrix = function(matrix) {
    matrix.reverse();
    
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < r; c++) {
            const temp = matrix[r][c];
            matrix[r][c] = matrix[c][r];
            matrix[c][r] = temp;
        }
    }
    
    return matrix
}

console.log(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));