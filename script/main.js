var field = new Object();
field.width = 10;
field.height = 25;
field.element = document.getElementsByClassName("field");

var figures = new Object();

function init() {
    initField();
    initFigures();

//    alert("init...");
}

function initField() {
    rowStr = "<table>";
    for(i = 0; i < field.height; i++){
        rowStr = rowStr + "<tr>";
        for(j = 0; j < field.width; j++){
            rowStr = rowStr + "<td class='fieldElement'></td>";
        }
        rowStr = rowStr + "</tr>";
    }
    rowStr = rowStr + "</table>";
    field.element[0].innerHTML = rowStr;
}

function initFigures() {
    figures[0] = [[0,1],[1,1],[1,0]];
    figures[1] = [[0,1],[0,2],[0,3]];
    figures[2] = [[0,-1],[0,1],[1,0]];
}

function drawFigure() {
    rndFigure = Math.floor(Math.random() * figures.length);
    testElement = document.getElementsByClassName("testDraw")[0];

    drawFigure = figures[rndFigure];
    var figure = [[1]];

    for (var i in drawFigure){
        if (drawFigure[i][0] == figure.length) {

        }
    }
}