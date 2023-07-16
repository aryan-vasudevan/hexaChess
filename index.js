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
    row_object.setAttribute("id", "row-" + (i + 1));
    row_object.setAttribute("class", "row");

    document.getElementById("board").appendChild(row_object);

    for (var j = 0; j < 11; j++) {
        var tile = document.createElement("img");
        tile.setAttribute("class", "tile");
        if (row[j] != '') {
            document.getElementById("row-" + (i + 1)).appendChild(tile);
            tile.src = "img/tile.png";
        }
    }
}