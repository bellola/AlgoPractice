// Given matrix, a rectangular matrix of integers, where each value represents 
// the cost of the room, your task is to return the total sum of all rooms that 
// are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).

function matrixElementsSum(matrix) {
    let sum = 0;
    let d = []
    for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
        if (matrix[j][i] === 0) {
            break;
        } else {
            sum += matrix[j][i];
        }
    }
}

return sum;
}

//we are going thru the nums in every colum
//if we encounter a 0 we break else we sum

