const container = document.querySelector(".container");
const etchASketch = document.createElement("div");

let gridNumber = 16;

const gridButtonInit = () =>{
    const gridButton = document.createElement("button");
    container.prepend(gridButton)
    gridButton.className = "btn";
    gridButton.textContent = "Set Grid";
    gridButton.addEventListener("click", () => {
        gridSet = prompt("The Etch a Sketch game is 16x16 change it for a new one.");
        if (gridSet) {
            rowsCreation(0);
            gridNumber = gridSet;
            rowsCreation(gridNumber);
        }
    });
}

const initSketch = () => {
    etchASketch.className = "et-a-sc";
    container.appendChild(etchASketch);
}

const columnCreation = (item) => {
    boxCreation(gridNumber, item)
}

const boxCreation = (gridNumber, item) => {
    for(let i = 0; i < gridNumber ; i++){
        let newBox = `box-${i}`;
        newBox = document.createElement("div");
        newBox.className = "box";
        item.appendChild(newBox);
    }

}

const resetApp = () => {
    etchASketch.remove();
}

const rowsCreation = (gridNumber) => {
    row_list = [];
    for(let i = 0; i < gridNumber ; i++){
        let new_row = `row-${i}`
        new_row = document.createElement("div");
        new_row.className = "row";
        row_list.push(new_row);
        etchASketch.appendChild(new_row);
    }
    console.log(row_list);
    row_list.forEach(columnCreation);
}



initSketch();
rowsCreation(gridNumber);
gridButtonInit();


