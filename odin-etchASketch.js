//create 16x16 etchASketch grid by appending child nodes to parent div

btn.addEventListener('click', function (e) {

    const parentDiv = document.getElementById("grid");
    console.log(parentDiv);
    for(var i = 0; i < 16; i++){
        const childRow = document.createElement("div");
        childRow.id = "row";
        parentDiv.appendChild(childRow);
        for(var j = 0; j < 16; j++){
            const childDiv = document.createElement("div");
            childDiv.classList = "childDiv";
            childDiv.id = "child" + i;
            childRow.appendChild(childDiv);
        }
    }

});

childDiv.addEventListener('hover', function (e) {
    var selectedTile = e.target.nodeName;
});
