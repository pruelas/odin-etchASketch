//create 16x16 etchASketch grid by appending child nodes to parent div

btn.addEventListener('click', function (e) {

    const parentDiv = document.getElementById("grid");
    for(var i = 0; i < 32; i++){
        const childRow = document.createElement("div");
        childRow.id = "row";
        parentDiv.appendChild(childRow);
        for(var j = 0; j < 32; j++){
            const childDiv = document.createElement("div");
            childDiv.classList = "childDiv";
            childDiv.id = "child" + i;
            childRow.appendChild(childDiv);
        }
    }

});

var etchASketchTiles = document.getElementById("grid");
etchASketchTiles.addEventListener('mouseover', function (e) {
    var selectedTile = e.target.id;
    if(e.target.className == "childDiv"){
        e.target.style.backgroundColor = 'black';
    }
});
