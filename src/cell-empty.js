const {Cell} = require('./cell');

export class CellEmpty extends Cell{
    constructor(x, y, width, height) {
        super(x, y, width, height);
    }

    show() {
        this.node.classList.add('cell-empty-clicked');
    }

}