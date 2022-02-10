//create 16x16 etchASketch grid by appending child nodes to parent div

function generateGrid(x, parentDiv){
    for(var i = 0; i < x; i++){
        const childRow = document.createElement("div");
        childRow.id = "row";
        parentDiv.appendChild(childRow);
        for(var j = 0; j < x; j++){
            const childDiv = document.createElement("div");
            childDiv.classList = "childDiv";
            childDiv.id = "child" + i;
            childRow.appendChild(childDiv);
        }
    }

}


var btns = document.querySelectorAll(".btn");
console.log(btns);
btns.forEach(btn => btn.addEventListener('click', function (e) {

    const parentDiv = document.getElementById("grid");
    const clearBtn = document.getElementById("clearBtn");
    if(e.target.textContent == "Start Grid!"){
        generateGrid(16, parentDiv);
        clearBtn.style.display = "initial";
    }else{
        console.log(e);
        while(parentDiv.hasChildNodes()){
            parentDiv.removeChild(parentDiv.lastChild);
        }
        generateGrid(64, parentDiv);
    }
    /*
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
    }*/



}));

var etchASketchTiles = document.getElementById("grid");
etchASketchTiles.addEventListener('mouseover', function (e) {
    var selectedTile = e.target.id;
    if(e.target.className == "childDiv"){
        e.target.style.backgroundColor = 'black';
    }
});

/*
btns.forEach(btn => {

    btn..addEventListener('click', (event)=> {
     // ... event handled
    });
 
 });*/