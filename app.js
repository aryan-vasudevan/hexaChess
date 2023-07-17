// Map of the Board (Constant)
const boardMap = [
    ['', '', '', '', '', 't', '', '', '', '', ''],
    ['', '', '', '', 't', '', 't', '', '', '', ''],
    ['', '', '', 't', '', 't', '', 't', '', '', ''],
    ['', '', 't', '', 't', '', 't', '', 't', '', ''],
    ['', 't', '', 't', '', 't', '', 't', '', 't', ''],
    ['t', '', 't', '', 't', '', 't', '', 't', '', 't'],
    ['', 't', '', 't', '', 't', '', 't', '', 't', ''],
    ['t', '', 't', '', 't', '', 't', '', 't', '', 't'],
    ['', 't', '', 't', '', 't', '', 't', '', 't', ''],
    ['t', '', 't', '', 't', '', 't', '', 't', '', 't'],
    ['', 't', '', 't', '', 't', '', 't', '', 't', ''],
    ['t', '', 't', '', 't', '', 't', '', 't', '', 't'],
    ['', 't', '', 't', '', 't', '', 't', '', 't', ''],
    ['t', '', 't', '', 't', '', 't', '', 't', '', 't'],
    ['', 't', '', 't', '', 't', '', 't', '', 't', ''],
    ['t', '', 't', '', 't', '', 't', '', 't', '', 't'],
    ['', 't', '', 't', '', 't', '', 't', '', 't', ''],
    ['', '', 't', '', 't', '', 't', '', 't', '', ''],
    ['', '', '', 't', '', 't', '', 't', '', '', ''],
    ['', '', '', '', 't', '', 't', '', '', '', ''],
    ['', '', '', '', '', 't', '', '', '', '', ''],
];

// Locations of Pieces (Constant at the begining)
const pieceLocations = {
    "1 1": 'bishop-w.png',
    "2 3": 'bishop-w.png',
    "3 5": 'bishop-w.png'
};

class Tile {
    constructor(row, tileNum) {
        this.row = row;
        this.tileNum = tileNum;
        this.tuple = this.row.toString() + " " + this.tileNum;
        this.rowId = row.toString();
        this.tileId = this.rowId + "-" + this.tileNum;
        this.containerId = this.tileId + "-container";
    }
    
    // Create a div for both the tiles and the pieces
    createContainer() {
        var container = document.createElement("div");
        document.getElementById(this.rowId).appendChild(container);
        container.setAttribute("id", this.containerId);
        container.setAttribute("class", "container");
    }
    
    // Create a tile
    createTile() {
        var tile = document.createElement("img");
        tile.setAttribute("class", "tile");
        console.log(this.tileId)
        tile.setAttribute("id", this.tileId + "-tile");
        tile.src = "img/tile.png";

        document.getElementById(this.containerId).appendChild(tile);
    }

    // Create a piece in the same div as the tile
    loadPiece() {

        if (this.tuple in pieceLocations) {
            var piece = document.createElement("img");
            
            piece.src = "img/pieces/" + pieceLocations[this.tuple];
            piece.setAttribute("class", "piece");
            piece.setAttribute("id", this.tileId + "-piece");
            document.getElementById(this.containerId).appendChild(piece);
        }
    }
}

// Board Setup
for (var i = 0; i < 21; i++) {
    // Create the rows
    var row_object = document.createElement("div");
    row_object.setAttribute("id", (i + 1).toString());
    row_object.setAttribute("class", "row");

    document.getElementById("board").appendChild(row_object);

    // Create the tiles and pieces
    var tileNum = 0;
    for (var j = 0; j < 11; j++) {
        if (boardMap[i][j] != '') {
            tileNum++;
            var tile = new Tile(i + 1, tileNum);
            tile.createContainer();
            tile.createTile();
            tile.loadPiece();
        }
    }
}


