class Matrix {
    constructor(numRows, numCol) {
        this.matrix = this.generateMatrix(numRows, numCol)
    }

    generateMatrix(numRows, numCol) {
        let matrix = []
        let counter = 1
        for (let r = 0; r < numRows; r++) {
            let row = []
            for (let c = 0; c < numCol; c++) {
                row.push(counter++)
            }
            matrix.push(row)
        }
        return matrix
    }

    print() {
        for (let i = 0; i < this.matrix.length; i++) {
            let line = ""
            for (let j = 0; j < this.matrix[i].length; j++) {
                line += (this.matrix[i][j] + "\t")
            }
            console.log(line)
        }
    }
    //for getting number with row and col numbers
    get(rowNum, colNum) {
        return this.matrix[rowNum][colNum]
    }
    // change numbers (we sometimes will do that with the get method)
    alter(rowNum, colNum, numberToReplace) {
        this.matrix[rowNum][colNum] = numberToReplace
    }
    // print col number
    printColum(colNum) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][colNum])
        }
    }

    // print row number
    printRow(rowNum) {
        for (let i = 0; i < this.matrix[rowNum].length; i++) {
            console.log(this.matrix[rowNum][i])
        }
    }

    findCoordinate(value) {
        for (let numRows = 0; numRows < this.matrix.length; numRows++) {
            for (let numCol = 0; numCol < this.matrix[numRows].length; numCol++) {
                if (value === this.matrix[numRows][numCol]) {
                    return [numRows,numCol] 
                }
            }
        }
    }
}






// const matrix = new Matrix(3, 3)
// matrix.print()





// module.exports = Matrix