const body = document.querySelector("body");
const btns = document.querySelector(".btns");
const container = document.querySelector(".container");

let gridNumber = 16;

const gridButtonInit = () => {
  const gridButton = document.createElement("button");
  btns.prepend(gridButton);
  gridButton.className = "btn";
  gridButton.textContent = "Set New Grid";
  gridButton.addEventListener("click", () => {
    gridSet = prompt(
      "The Etch a Sketch game is 16x16 change it for a new one.\nSelect any new size between 16px and 64px"
    );
    if (gridSet && gridSet >= 16 && gridSet <= 64) {
      gridNumber = gridSet;
      newSketch = initSketch();
      rowsCreation(gridNumber, newSketch);
      newSketch.previousSibling.remove();
    } else {
        alert("Not a valid pixel number.")
    }
  });
};

const resetButtonInit = () => {
  const resetButton = document.createElement("button");
  btns.prepend(resetButton);
  resetButton.className = "btn";
  resetButton.textContent = "Reset Board";
  resetButton.addEventListener("click", () => {
    newSketch = initSketch();
    rowsCreation(gridNumber, newSketch);
    newSketch.previousSibling.remove();
  });
};

const initSketch = () => {
  const etchASketch = document.createElement("div");
  etchASketch.className = "et-a-sc";
  container.appendChild(etchASketch);

  const upBoard = document.querySelector(".upBoard");
  container.prepend(upBoard);

  return etchASketch;
};

const columnCreation = (item) => {
  boxCreation(gridNumber, item);
};

const boxCreation = (gridNumber, item) => {
  for (let i = 0; i < gridNumber; i++) {
    let newBox = `box-${i}`;
    newBox = document.createElement("div");
    newBox.className = "box";
    item.appendChild(newBox);
  }
};

const rowsCreation = (gridNumber, etchASketch) => {
  row_list = [];
  for (let i = 0; i < gridNumber; i++) {
    let new_row = `row-${i}`;
    new_row = document.createElement("div");
    new_row.className = "row";
    row_list.push(new_row);
    etchASketch.appendChild(new_row);
  }
  row_list.forEach(columnCreation);
};

rowsCreation(gridNumber, initSketch());
gridButtonInit();
resetButtonInit();