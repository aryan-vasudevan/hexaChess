// INITIAL START 
//
//
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
// White Piecesb    // Bishop
    "1 1": 'bishop-w.png',
    "3 2": 'bishop-w.png',
    "5 3": 'bishop-w.png',
    // Queen
    "2 1": 'queen-w.png',
    // King
    "2 2": 'king-w.png',
    // Knight
    "3 1": 'knight-w.png',
    "3 3": 'knight-w.png',
    // Rook
    "4 1": 'rook-w.png',
    "4 4": 'rook-w.png',
    // Pawn
    "5 1": 'pawn-w.png',
    "6 2": 'pawn-w.png',
    "7 2": 'pawn-w.png',
    "8 3": 'pawn-w.png',
    "9 3": 'pawn-w.png',
    "8 4": 'pawn-w.png',
    "7 4": 'pawn-w.png',
    "6 5": 'pawn-w.png',
    "5 5": 'pawn-w.png',

// Black Pieces
    // Bishop
    "21 1": 'bishop-b.png',
    "19 2": 'bishop-b.png',
    "17 3": 'bishop-b.png',
    // Queen
    "20 1": 'queen-b.png',
    // King
    "20 2": 'king-b.png',
    // Knight
    "19 1": 'knight-b.png',
    "19 3": 'knight-b.png',
    // Rook
    "18 1": 'rook-b.png',
    "18 4": 'rook-b.png',
    // Pawn
    "17 1": 'pawn-b.png',
    "16 2": 'pawn-b.png',
    "15 2": 'pawn-b.png',
    "14 3": 'pawn-b.png',
    "13 3": 'pawn-b.png',
    "14 4": 'pawn-b.png',
    "15 4": 'pawn-b.png',
    "16 5": 'pawn-b.png',
    "17 5": 'pawn-b.png',

};

// Tile
class Tile {
    constructor(row, tileNum) {
        this.row = row;
        this.tileNum = tileNum;
        this.tuple = this.row.toString() + " " + this.tileNum;
        this.rowId = this.row.toString();
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
        tile.setAttribute("id", this.tileId + "-tile");

        if (this.row % 3 === 1) {
            var path = "tile2.png"
        } else if (this.row % 3 === 2) {
            var path = "tile3.png"
        } else if (this.row % 3 === 0) {
            var path = "tile1.png"
        }
        tile.src = "img/tiles/" + path;
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
            var tile = new Tile(i + 1, tileNum, pieceLocations);
            tile.createContainer();
            tile.createTile();
            tile.loadPiece();
        }
    }
}
