// INITIAL START 
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
const pieceInfo = {
// White Pieces
   // Bishop
    'bishop-1-w': ['bishop-w.png', '1-1'],
    'bishop-2-w': ['bishop-w.png', '3-2'],
    'bishop-3-w': ['bishop-w.png', '5-3'],
    // Queen
    'queen-w': ['queen-w.png', '2-1'],
    // King
    'king-w': ['king-w.png', '2-2'],
    // Knight
    'knight-1-w': ['knight-w.png', '3-1'],
    'knight-2-w': ['knight-w.png', '3-3'],
    // Rook
    'rook-1-w': ['rook-w.png', '4-1'],
    'rook-2-w': ['rook-w.png', '4-4'],
    // Pawn
    'pawn-1-w': ['pawn-w.png', '5-1'],
    'pawn-2-w': ['pawn-w.png', '6-2'],
    'pawn-3-w': ['pawn-w.png', '7-2'],
    'pawn-4-w': ['pawn-w.png', '8-3'],
    'pawn-5-w': ['pawn-w.png', '9-3'],
    'pawn-6-w': ['pawn-w.png', '8-4'],
    'pawn-7-w': ['pawn-w.png', '7-4'],
    'pawn-8-w': ['pawn-w.png', '6-5'],
    'pawn-9-w': ['pawn-w.png', '5-5'],

// Black Pieces
    // Bishop
    'bishop-1-b': ['bishop-b.png','21-1'],
    'bishop-2-b': ['bishop-b.png','19-2'],
    'bishop-3-b': ['bishop-b.png','17-3'],
    // Queen
    'queen-b': ['queen-b.png','20-1'],
    // King
    'king-b': ['king-b.png', '20-2'],
    // Knight
    'knight-1-b': ['knight-b.png','19-1'],
    'knight-2-b': ['knight-b.png','19-3'],
    // Rook
    'rook-1-b': ['rook-b.png', '18-1'],
    'rook-2-b': ['rook-b.png',  '18-4'],
    // Pawn
    'pawn-1-b': ['pawn-b.png', '17-1'],
    'pawn-2-b': ['pawn-b.png', '16-2'],
    'pawn-3-b': ['pawn-b.png', '15-2'],
    'pawn-4-b': ['pawn-b.png', '14-3'],
    'pawn-5-b': ['pawn-b.png', '13-3'],
    'pawn-6-b': ['pawn-b.png', '14-4'],
    'pawn-7-b': ['pawn-b.png', '15-4'],
    'pawn-8-b': ['pawn-b.png', '16-5'],
    'pawn-9-b': ['pawn-b.png', '17-5']
};

// Tile
class Tile {
    constructor(row, column, tileSrc) {
        this.row = row;
        this.column = column;
        this.containerId = `${row.toString()}-${column}`;
        this.tileId = `${row.toString()}-${column}-t`;
        this.tileSrc = tileSrc;
    }

    createTile() {
        // Create the container for both the tile and piece
        var container = document.createElement("div");
        container.setAttribute("id", this.containerId);
        container.setAttribute("class", "container");
        container.addEventListener("click", handleclick);
        document.getElementById(this.row).appendChild(container);

        // Load the tile in the container
        var tile = document.createElement("img");
        tile.setAttribute("id", this.tileId);
        tile.setAttribute("class", "tile");
        tile.src = this.tileSrc;
        container.appendChild(tile);
    }  
}   

// Piece
class Piece {
    constructor(name) {
        this.name = name;
        this.pos = pieceInfo[this.name][1];
        this.id = `${name}`;
    }

    loadPeice() {
        // Getting the container that was created when the tiles were being made
        parent = document.getElementById(`${this.pos}`);

        // Create the piece
        var piece = document.createElement("img");
        piece.src = `img/pieces/${pieceInfo[this.name][0]}`;
        piece.setAttribute("id", this.id);
        piece.setAttribute("class", "piece");
        parent.appendChild(piece);
    }
}

function setBoard() {
    for (var i = 1; i <= 21; i++) {
        // Create the rows
        var row_object = document.createElement("div");
        row_object.setAttribute("id", i.toString());
        row_object.setAttribute("class", "row");
        document.getElementById("board").appendChild(row_object);

        // Create the tiles
        var column = 0;
        var row = i;
        var tileSrc = `tile${i % 3}.png`;

        for (var j = 1; j <= 11; j++) {
            if (boardMap[i - 1][j - 1] != '') {
                column++;
                var tile = new Tile(row, column, "img/tiles/" + tileSrc);
                tile.createTile();
            }
        } 
    }    
}

function setPeices() {
    // Iterate through the pieces and call the method to load a piece
    for (var name of Object.keys(pieceInfo)) {
        var piece = new Piece(name);
        piece.loadPeice();
    }
}

function updatePiece(newPos, pieceId) {
    // Update the piece position by getting the new position (tile clicked) and move it there
    parent = document.getElementById(newPos);
    parent.appendChild(document.getElementById(pieceId));
}

// Piece currently held
var held = '';
var turn = 'w'

function handleclick() {
    // If the thing clicked was a piece 
    if (this.children.length === 2) {
        held = this.children[1].id;
    
    // If the thing clicked was a tile and a piece is being held
    // Check if the piece is in accordance with whose turn it is
    } else if (held != '' && held.slice(-1) === turn) {
        // Update the Piece Position
        var pieceSrc = pieceInfo[held][0];
        pieceInfo[held] = [pieceSrc, this.id];
        updatePiece(this.id, held);
        
        // After the piece moves, nothing is held
        held = '';

        // Change Turns
        if (turn === 'w') {
            turn = 'b';
        } else {
            turn = 'w';
        }
    }
}

// Start the game
setBoard();
setPeices();