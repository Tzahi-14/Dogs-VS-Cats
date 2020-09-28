// const Matrix = require("./Matrix");

class playerMatrix extends Matrix {
    constructor(numRows, numCol) {
        super(numRows, numCol)
        this.playersScore = {player1Score:0, player2Score: 0}
    }

    loadBoard(numRows, numCol) {
        for (let i = 0; i < numRows; i++) {
            this.matrix[i] = []
            for (let j = 0; j < numCol; j++) {
                this.matrix[i].push(".")
            }
        }
    }

    player1(rowNum, colNum, numberToReplace) {
        this.alter(rowNum, colNum, numberToReplace)
    }
    player2(rowNum, colNum, numberToReplace) {
        this.alter(rowNum - 1, colNum - 1, numberToReplace)
    }

    movePlayer(playernumber, side) {
        let currentPos = this.findCoordinate(playernumber)
        let newPos = this.findCoordinate(playernumber)
        if (side === "down") {
            newPos = [this.findCoordinate(playernumber)[0] + 1, this.findCoordinate(playernumber)[1]]
        }
        else if (side === "up") {
            newPos = [this.findCoordinate(playernumber)[0] - 1, this.findCoordinate(playernumber)[1]]
        }
        else if (side === "left") {
            newPos = [this.findCoordinate(playernumber)[0], this.findCoordinate(playernumber)[1] - 1]
        }
        else if (side === "right") {
            newPos = [this.findCoordinate(playernumber)[0], this.findCoordinate(playernumber)[1] + 1]
        }
        if (this.get(newPos[0], newPos[1]) === "c") {
            playernumber === 1 ? this.playersScore.player1Score += 10 : this.playersScore.player2Score += 10
        }
        if(this.get(newPos[0], newPos[1]) ==="c" ||this.get(newPos[0], newPos[1]) ==="."){
            this.alter(newPos[0], newPos[1], playernumber)
            this.alter(currentPos[0], currentPos[1], ".")
        }
        return { newPos, currentPos }
    }

    addingCoins(rowNum, colNum, coinsNumber) {
        let randomRow = 0
        let randomCol = 0
        let i = 0
        while (i < coinsNumber) {
            randomRow = Math.floor(Math.random() * rowNum)
            randomCol = Math.floor(Math.random() * colNum)
            if (this.get(randomRow, randomCol) === ".") {
                this.alter(randomRow, randomCol, "c")
            }
            else {
                i--
            }
            i++
        }
    }

    addWalls(rowNum, colNum, wallsNumber){
        let randomRow = 0
        let randomCol = 0
        let i = 0
        while (i < wallsNumber) {
            randomRow = Math.floor(Math.random() * rowNum)
            randomCol = Math.floor(Math.random() * colNum)
            if (this.get(randomRow, randomCol) === ".") {
                this.alter(randomRow, randomCol, "w")
            }
            else {
                i--
            }
            i++
        } 
    }
}

// const board = new playerMatrix(5, 5)
// board.loadBoard(5, 5)
// board.player1(0, 0, 1)
// board.player2(5, 5, 2)
// board.movePlayer(1, "down")
// board.movePlayer(2, "left")
// board.movePlayer(2, "left")
// board.addingCoins(5, 5, 3)
// board.print()