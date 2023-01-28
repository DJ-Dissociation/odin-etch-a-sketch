// Variable definitions
const container = document.querySelector('.container');     // select container to hold all the squares
const containerWidth = 690; //px
// let dimension = 320;
// let nSquares = 16;

// Initialize first grid of 16 squares
makeGrid(16);
let squares = document.querySelectorAll('.colorSquare');
activateSquares();

// Create and add all squares in a grid, given a # of squares as a dimension
function makeGrid(dimension){
    container.textContent = "";
    let squareWidth = (containerWidth/dimension)+"px";
    console.log(squareWidth);
    console.log(typeof squareWidth);
    for (i = 0; i < dimension; i++){    // for each row
        const newRow = document.createElement('div');
        newRow.classList.add('row');
    
        for (j = 0; j < dimension; j++){    // for each element per row
            const newSquare = document.createElement('div');
            newSquare.classList.add('colorSquare');
            newSquare.style.width = squareWidth;
            newSquare.style.height = squareWidth;
            newRow.appendChild(newSquare);
        }
        container.appendChild(newRow);   
    }
    console.log("testing: "+container.style.height);
}

// Whenever run, this sweeps the document to reselect all squares and
// update the nodelist
function activateSquares() {
    squares = document.querySelectorAll('.colorSquare');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', () =>{
            console.log("hovering");
            square.classList.add('activeSquare');
        });
    });
    return squares;
}

// Add a reset button that clears all squares when pressed
const resetButton = document.querySelector('.resetButton');
resetButton.addEventListener('click', () => {
    squares.forEach((square) => {
        square.classList.remove('activeSquare');
    })
});

// A function to run when the Resize button is pressed; takes user input then
// generates a new grid of appropriate size
function resizeGrid(){
    let dimension = parseInt(prompt("What size do you want?"));
    if (dimension > 100) {
        alert("Too big, sorry..");
        return;
    }
    makeGrid(dimension);
    squares = activateSquares();
}