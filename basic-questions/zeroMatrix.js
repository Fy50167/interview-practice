/**
 * Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
column are set to 0. 
 */

const zeroMatrix = function(matrix) {
    const hashRows = new Set();
    const hashColumns = new Set();
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[0].length; c++) {
            if (matrix[r][c] === 0) {
                hashRows.add(r);
                hashColumns.add(c);
            }
        }
    }
    for (const row of hashRows) {    
        zeroRow(matrix, row);
    }
    for (const col of hashColumns) {
        zeroColumn(matrix, col);
    }
    
    return matrix
};

const zeroRow = function(matrix, row) {
    for (let c = 0; c < matrix[0].length; c++) {
        matrix[row][c] = 0;
    }
}

const zeroColumn = function(matrix, column) {
    for (let r = 0; r < matrix.length; r++) {
        matrix[r][column] = 0;
    }
}

console.log(zeroMatrix([[1, 1, 1], [0, 0, 0], [1, 1, 1], [1, 1, 1]]));
console.log(zeroMatrix([[1, 0, 1], [1, 1, 1], [1, 1, 1], [0, 1, 1]]));