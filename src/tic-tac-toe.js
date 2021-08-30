class TicTacToe {

    currentPlayer = 'x';
    playField = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    availableSteps = 9;
    winner = '';

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.playField[rowIndex][columnIndex]) {
            this.playField[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
            this.availableSteps--;
        } 
    }

    isFinished() {
        if (this.getWinner() || this.isDraw()) {
            return true;
        }
        return false;
    }

    getWinner() {
        if (this.playField[0][0] !== null && this.playField[0][0] === this.playField[0][1] && this.playField[0][0] === this.playField[0][2]
        || this.playField[1][0] !== null && this.playField[1][0] === this.playField[1][1] && this.playField[1][0] === this.playField[1][2]
        || this.playField[2][0] !== null && this.playField[2][0] === this.playField[2][1] && this.playField[2][0] === this.playField[2][2]
        || this.playField[0][0] !== null && this.playField[0][0] === this.playField[1][0] && this.playField[0][0] === this.playField[2][0]
        || this.playField[0][1] !== null && this.playField[0][1] === this.playField[1][1] && this.playField[0][1] === this.playField[2][1]
        || this.playField[0][2] !== null && this.playField[0][2] === this.playField[1][2] && this.playField[0][2] === this.playField[2][2]
        || this.playField[0][0] !== null && this.playField[0][0] === this.playField[1][1] && this.playField[0][0] === this.playField[2][2]
        || this.playField[2][0] !== null && this.playField[2][0] === this.playField[1][1] && this.playField[2][0] === this.playField[0][2]) {
            this.winner = this.currentPlayer === 'x' ? 'o' : 'x';
            return this.winner;
        }
        return null;
    }

    noMoreTurns() {
        if (this.availableSteps === 0) {
            return true;
        }
        return false;
    }

    isDraw() {
        if (this.noMoreTurns() && !this.getWinner()) {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.playField[rowIndex][colIndex]) {
            return this.playField[rowIndex][colIndex];
        }
        return null; 
    }
}

module.exports = TicTacToe;
