const {
    CellEmpty
} = require('./cell-empty');
const {
    CellBoom
} = require('./cell-boom');


export class Game {
    constructor(options) {
        const {
            width,
            height,
            root,
            cellWidth,
            cellHeight
        } = options;

        this.width = width;
        this.height = height;
        this.cellWidth = cellWidth;
        this.cellHeight = cellHeight;
        this.cells = [];


        this.root = root;
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                let cell = null;
                
                if (Math.random() > 0.3) {
                    cell = new CellEmpty(x, y, cellWidth, cellHeight);
                } else {
                    cell = new CellBoom(x, y, cellWidth, cellHeight);
                }
                this.cells.push(cell);
                cell.render(root);
            }
        }

        this.bindEvent();
    }

    bindEvent() {
        this.root.addEventListener('click', event => {
            const cell = event.target['data-type'];
            if(cell instanceof CellBoom) {
                alert('Game Over');
                // this.cells
            } else if(cell instanceof CellEmpty) {
                cell.show();
            }
        });
    }
}