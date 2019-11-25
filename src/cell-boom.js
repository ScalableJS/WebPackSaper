const {Cell} = require('./cell');

export class CellBoom extends Cell{
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.node.classList.add('cell-boom');
    }
}