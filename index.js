function Bishop (pos) {
    this.pos = "f12"
}

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

for (var i = 0; i < 21; i++) {
    var row = boardMap[i];
    var row_object = document.createElement("div");
    row_object.setAttribute("id", "row-" + i);
    row_object.style.width = "100%";
    document.getElementById("board").appendChild(row_object);

    for (var j = 0; j < 11; j++) {
        if (row[j] === '') {
            console.log("space");
        } else {
            var tile = document.createElement("img");
            tile.setAttribute("class", "tile")
            document.getElementById("row-" + i).appendChild(tile)
            tile.src = "img/tile.png";
        }
    }
}