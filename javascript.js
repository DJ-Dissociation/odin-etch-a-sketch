// Variable definitions
const container = document.querySelector('.container');     // select container to hold all the squares
// let dimension = 960;
// let nSquares = 16;

// Create and add all squares in a grid
for (i = 0; i < 16; i++){
    const newRow = document.createElement('div');
    newRow.classList.add('row');

    for (j = 0; j < 16; j++){
        const newSquare = document.createElement('div');
        newSquare.classList.add('colorSquare');
        newRow.appendChild(newSquare);
    }
    container.appendChild(newRow);   
}

// Add ~hover~ eventListener to all squares, using 'mouseenter' event
const squares = document.querySelectorAll('.colorSquare');
squares.forEach((square) => {
    square.addEventListener('mouseenter', () =>{
        console.log("hovering");
        square.classList.add('activeSquare');
    });
});

// Add a reset button that clears all squares when pressed
const resetButton = document.querySelector('.resetButton');
resetButton.addEventListener('click', () => {
    squares.forEach((square) => {
        square.classList.remove('activeSquare');
    })
});

// Add a resize button that prompts user for a dimension, then rebuilds grid (when pressed)
const resizeButton = document.querySelector('resizeButton');
resizeButton.addEventListener('click', () => {
    //prompt resize, TODO implement
});